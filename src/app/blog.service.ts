import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Post, posts } from "src/data/post";

@Injectable({ providedIn: 'root' })
export class BlogService {
  private postDataSource = new BehaviorSubject<Post[]>(posts)

  postData$ = this.postDataSource.asObservable()

  updatePost(newPost: Post) {
    const oldPosts = this.postDataSource.getValue()
    const oldPost = oldPosts.find(post => post.id === newPost.id)
    const position = oldPosts.indexOf(oldPost)
    oldPosts[position] = {...newPost}
    console.log(oldPosts)
    this.postDataSource.next(oldPosts)
  }

  getPost(slug: string) {
    const posts = this.postDataSource.getValue()
    return posts.find(post => slug === post.slug)
  }
}