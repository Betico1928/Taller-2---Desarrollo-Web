import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


import { Users } from "../model/users";
import { Comments } from "../model/comments";
import { Posts } from "../model/posts";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<Users[]>
  {
    return this.http.get<Users[]>(`${this.baseUrl}/users`).pipe(tap(users => console.log(users)));
  }
}
