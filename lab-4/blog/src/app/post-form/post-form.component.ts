import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import type { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  protected title = '';

  protected text = '';

  @Output()
  public onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() {}

  public ngOnInit() {}

  public addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: Math.random(),
      };
      this.onAdd.emit(post);

      console.log('New post', post);
      this.title = this.text = '';
    }
  }
}
