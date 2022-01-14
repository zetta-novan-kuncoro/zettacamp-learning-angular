import { AfterViewChecked, Component, OnInit } from "@angular/core";

export type Post = {
  id: number
  title: string
  content: string
}

let posts = [
  { id: 1234, title: 'How to make an Indomie', content: 'lorem ipsum ajalah' }
]

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit, AfterViewChecked {
  posts: Post[]

  ngOnInit(): void {
    this.posts = [...posts]
  }

  ngAfterViewChecked(): void {
    if (this.posts.length > posts.length) {
      posts = [...this.posts]
      console.log(posts)
    }
  }

  onPostCreate({ title, content }) {
    this.posts.push({
      id: Math.floor(Math.random() * 2000000),
      title,
      content
    })
  }
}