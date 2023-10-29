import { Component } from '@angular/core';

@Component({
  selector: 'properties-app',
  template: `<p>Ім'я: {{ name }}</p>
    <p>Вік: {{ age }}</p>
    <input type="text" [value]="name" />
    <input type="text" [value]="age" /> `,
})
export default class AppComponent {
  protected name = 'Tom';
  protected age = 25;
}
