import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `<p>Ім'я: {{ name }}</p>
    <p>Вік: {{ age }}</p>
    <input type="text" [value]="name" /><br />
    <input type="text" [value]="age" />
    <p [textContent]="name"></p>
    <table border="1">
      <tr>
        <td [attr.colspan]="colspan">One-Two</td>
      </tr>
      <tr>
        <td>Three</td>
        <td>Four</td>
      </tr>
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </table>
    <p>Кількість кліків {{ count }}</p>
    <button (click)="increase()">Click</button>
    <p>Кількість кліків {{ count_2 }}</p>
    <button (click)="increase_2($event)">Click</button>`,
})
export default class AppComponent {
  protected name = 'Tom';
  protected age = 25;
  protected colspan = 2;
  protected count = 0;
  protected count_2 = 0;

  protected increase() {
    this.count++;
  }

  protected increase_2($event) {
    this.count_2++;
    console.log($event);
  }
}
