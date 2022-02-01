import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './../../models/posts.model';
import { getPosts } from './../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private store: Store<AppState>) {}
  posts: Observable<Post[]>;

  ngOnInit() {
    this.posts = this.store.select(getPosts);
    console.log(this.posts);
  }

}