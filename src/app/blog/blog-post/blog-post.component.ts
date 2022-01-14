import { Component, ContentChild, Input } from "@angular/core";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html'
})
export class BlogPostComponent {
  @Input() title: string
  @ContentChild('blogContent') blogContent: string
}