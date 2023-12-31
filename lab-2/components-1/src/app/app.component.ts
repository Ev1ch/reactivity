import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <label>Введіть ім'я:</label>
    <input [(ngModel)]="name" placeholder="name" />
    <h1>Ласкаво просимо {{ name }}!</h1>
    <h2>Hello Angular</h2>
    <p>Angular 16 представляє модульну архітектуру додатку</p>
    <child-comp>
      <h2>Ласкаво просимо {{ name }}!</h2>
    </child-comp>
    <p>Hello {{ name }}</p>
    <child-comp [userName]="name2" [userAge]="age"></child-comp>
    <input type="text" [(ngModel)]="name2" />
  `,
  styleUrls: ['./app.component.css'],
})
export default class AppComponent {
  protected name = 'Петро';

  protected name2 = 'Tom';

  protected age = 24;
}
