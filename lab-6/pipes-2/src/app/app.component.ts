import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app',
  template: `<input [(ngModel)]="num" name="fact" />
    <div>Результат: {{ num | format }}</div>
    <hr />
    <input #user name="user" class="form-control" />
    <button class="btn" (click)="users.push(user.value)">Add</button>
    <p>{{ users | join }}</p>
    <p>Модель: {{ phone | async }}</p>
    <button (click)="showPhones()">Показати модель</button>`,
})
export default class AppComponent {
  protected num = 15.45;

  protected users = ['Tom', 'Alice', 'Sam', 'Kate', 'Bob'];

  protected phones = ['iPhone 7', 'LG G 5', 'Honor 9', 'Idol S4', 'Nexus 6P'];

  protected phone: Observable<string> | undefined;

  constructor() {
    this.showPhones();
  }

  protected showPhones() {
    this.phone = interval(500).pipe(map((i) => this.phones[i]));
  }
}
