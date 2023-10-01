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


  constructor(private apiService: ApiService) { }

  searchUserByUsername() {
    this.apiService.searchUserByUsername(this.username).subscribe(
      data => {
        if (data.users && data.users.length > 0) {
          this.user = data.users[0];
        } else {
          this.error = 'Usuario no encontrado';
        }
      },
      err => {
        this.error = 'Hubo un error en la búsqueda';
      }
    );
  }
}
