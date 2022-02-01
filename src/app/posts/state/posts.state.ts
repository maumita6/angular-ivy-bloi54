import { Post } from './../../models/posts.model';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    { id: '1', title: 'title 1', description: 'post1 descendant' },
    { id: '12', title: 'title 12', description: 'post1 descendant2' },
  ],
};
