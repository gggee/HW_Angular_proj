import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: any;
  constructor(private postsService:PostsService) {}
  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  }
}
