import { Component } from '@angular/core';
import { ApiService} from "../../service/api.service";
import { Users } from "../../model/users";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})

export class UserSearchComponent {

  username: string = '';
  user: Users | null = null;
  error: string = '';
  showErrorModal: boolean = false;  // Añadido para manejar la visualización del modal

  constructor(private apiService: ApiService) { }

  searchUserByUsername() {
    this.apiService.searchUserByUsername(this.username).subscribe(data => {
        if (data.users && data.users.length > 0) {
          this.user = data.users[0];
          this.showErrorModal = false;  // Asegurarse de que el modal esté oculto
        } else {
          this.error = 'Usuario no encontrado';
          this.showErrorModal = true;
          setTimeout(() => {
            this.showErrorModal = false;  // Ocultar el modal después de 5 segundos
          }, 5000);
        }
      },
      err => {
        this.error = 'Hubo un error en la búsqueda';
        this.showErrorModal = true;
        setTimeout(() => {
          this.showErrorModal = false;
        }, 5000);
      });
  }
}
