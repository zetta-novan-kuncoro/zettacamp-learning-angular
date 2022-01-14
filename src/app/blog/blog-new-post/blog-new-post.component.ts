import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog-new-post',
  templateUrl: './blog-new-post.component.html',
})
export class BlogNewPostComponent {
  @Output() postCreate = new EventEmitter<{ title: string, content: string }>()

  onClickCreate(form: NgForm) {
    if (form.status === 'VALID') this.postCreate.emit(form.value)
  }
}
