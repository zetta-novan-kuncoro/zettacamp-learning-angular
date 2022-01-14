import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { BlogComponent } from "./blog.component";
import { BlogPostsComponent } from "./blog-posts/blog-posts.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { BlogNewPostComponent } from './blog-new-post/blog-new-post.component';

@NgModule({
  declarations: [BlogComponent, BlogPostsComponent, BlogPostComponent, BlogNewPostComponent],
  imports: [CommonModule, FormsModule],
  exports: [BlogComponent]
})
export class BlogModule {}