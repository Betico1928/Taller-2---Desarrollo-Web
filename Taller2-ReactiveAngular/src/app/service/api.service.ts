import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
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

  searchUserByUsername(username: string): Observable<any>
  {
    return this.http.get<any>(`${this.baseUrl}/users/filter?key=username&value=${username}`);
  }

  getPostsByUserId(userId: number) {
    return this.http.get<{ posts: Posts[] }>(`https://dummyjson.com/posts/user/${userId}`);
  }

  getCommentsByPostId(postId: number) {
    return this.http.get<{ comments: Comments[] }>(`https://dummyjson.com/comments/post/${postId}`);
  }

}
