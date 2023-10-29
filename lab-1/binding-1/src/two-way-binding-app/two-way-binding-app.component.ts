import { Component } from '@angular/core';

@Component({
  selector: 'two-way-binding-app',
  template: `<p>Ім'я: {{ name_2 }}</p>
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
    <button (click)="increase_2($event)">Click</button>
    <p>Привіт {{ name }}</p>
    <input type="text" [(ngModel)]="name" /> <br /><br />
    <input type="text" [(ngModel)]="name" />`,
})
export default class AppComponent {
  protected name = 'Tom';
  protected name_2 = 'Tom 2';

  protected age = 25;
  protected colspan = 2;
  protected count = 0;
  protected count_2 = 0;

  protected increase() {
    this.count++;
  }

  protected increase_2($event: any) {
    this.count_2++;
    console.log($event);
  }
}
