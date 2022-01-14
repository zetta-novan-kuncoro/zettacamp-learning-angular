import { Component, Input } from "@angular/core";
import { Post } from "../blog.component";

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html'
})
export class BlogPostsComponent {
  @Input() posts: Post[]
}