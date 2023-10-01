import { Component } from '@angular/core';
import { ApiService} from "../../service/api.service";
import { Users } from "../../model/users";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})

export class UserSearchComponent
{
  user: Users | null = null;
  error: string | null = null;

  constructor(private apiService: ApiService) { }


  searchUser(username: string): void
  {
    this.apiService.getUserByUsername(username).subscribe((users: Users[]) => {

      if (users.length > 0)
      {
        this.user = users[0];
        this.error = null;
      } else {
        this.user = null;
        this.error = 'Usuario no encontrado';
      }
      },
      err => {
        this.error = 'Hubo un error al buscar el usuario. Por favor, inténtalo nuevamente.';
      }
    );
  }
}
