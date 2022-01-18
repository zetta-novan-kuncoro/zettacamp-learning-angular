import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Post } from 'src/data/post';

@Component({
  selector: 'app-blog-post',
  templateUrl: 'blog-post.component.html',
  styleUrls: ['blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  post: Post | undefined;
  isOnEditMode: boolean | undefined;

  constructor(
    private blog: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.params['slug'];
    this.post = this.blog.getPost(slug);
    this.route.queryParams.subscribe((params: Params) => {
      this.isOnEditMode = params['edit']
    })
  }

  onSubmit(form) {
    console.log(form)
  }

  onClickEdit(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { edit: true },
    });
  }

  onCancelEdit(): void {
    this.router.navigate([], {
      queryParams: null
    })
  }
}
