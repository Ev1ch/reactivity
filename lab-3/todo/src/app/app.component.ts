import { Component } from '@angular/core';

import TodoList from './todo-list';
import TodoItem from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export default class AppComponent {
  private list = new TodoList('Bob', [
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Collect tickets'),
  ]);

  protected showComplete: boolean = false;

  protected get username(): string {
    return this.list.user;
  }

  protected get itemCount(): number {
    return this.list.items.filter((item) => !item.isComplete).length;
  }

  protected get items(): readonly TodoItem[] {
    return this.list.items.filter(
      (item) => this.showComplete || !item.isComplete
    );
  }

  protected addItem(newItem: string) {
    if (newItem != '') {
      this.list.addItem(newItem);
    }
  }
}
