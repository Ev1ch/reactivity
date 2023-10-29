import { Component } from '@angular/core';

export interface Post {
  id?: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected title = 'BlogComponents';

  protected posts: Post[] = [
    { title: 'Вивчаю компоненти', text: 'Створюю проект "Блог"', id: 1 },
    { title: 'Вивчаю директиви', text: 'Все ще створюю "Блог"', id: 2 },
  ];

  protected updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  protected deletePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
