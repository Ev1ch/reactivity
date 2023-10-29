import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import type { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  protected title = '';

  protected text = '';

  protected date!: Date;

  myDate$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  public ngOnInit() {
    this.myDate$.subscribe((date) => {
      this.date = date;
    });
  }

  public addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        date: this.date,
      };
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }

  @Output()
  public onAdd: EventEmitter<Post> = new EventEmitter<Post>();
}
