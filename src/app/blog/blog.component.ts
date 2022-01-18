import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/data/post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private blog: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.blog.postData$.subscribe((value) => (this.posts = value));
  }

  onClick(slug: string) {
    this.router.navigate([slug], { relativeTo: this.route });
  }
}
