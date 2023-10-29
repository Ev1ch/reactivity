import {
  type OnInit,
  Component,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

import type { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input('toPost')
  public post!: Post;

  @Output()
  public onRemove = new EventEmitter<number>();

  constructor() {}

  public ngOnInit() {}

  public ngOnDestroy() {
    console.log('метод ngOnDestroy', this.post);
  }

  protected removePost() {
    this.onRemove.emit(this.post.id);
  }
}
