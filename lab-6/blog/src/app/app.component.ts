import { Component } from '@angular/core';

export interface Post {
  id?: number;
  title: string;
  text: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected title = 'BlogComponents';

  protected search = '';

  protected posts: Post[] = [
    {
      title: 'Вивчаю компоненти',
      text: 'Створюю проект "Блог"',
      id: 1,
      date: new Date(),
    },
    {
      title: 'Вивчаю директиви',
      text: 'Все ще створюю "Блог"',
      id: 2,
      date: new Date(),
    },
  ];

  protected updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  protected deletePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
