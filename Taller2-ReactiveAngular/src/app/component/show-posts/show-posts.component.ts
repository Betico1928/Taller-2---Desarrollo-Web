import {Component, Input, OnInit} from '@angular/core';
import { ApiService} from "../../service/api.service";
import { Comments} from "../../model/comments";
import {Posts} from "../../model/posts";

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})

export class ShowPostsComponent implements OnInit {

  @Input() userId: number | null = null;
  posts: Posts[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    if (this.userId) {
      this.apiService.getPostsByUserId(this.userId).subscribe(data => {
        this.posts = data.posts;
        this.posts.forEach(post => {
          this.apiService.getCommentsByPostId(post.id).subscribe(commentsData => {
            post.comments = commentsData.comments;
          });
        });
      });
    }
  }
}
