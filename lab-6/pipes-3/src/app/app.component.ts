import { Component, type OnInit } from '@angular/core';
import { type Observable } from 'rxjs';

import HttpService from './http.service';

@Component({
  selector: 'app',
  template: `<ul>
    <li *ngFor="let user of users | async">
      <p>Ім’я користувача: {{ user.name }}</p>
      <p>Вік користувача: {{ user.age }}</p>
    </li>
  </ul>`,
  providers: [HttpService],
})
export default class AppComponent implements OnInit {
  protected users: Observable<Object> | undefined;

  constructor(private httpService: HttpService) {}

  public ngOnInit() {
    this.users = this.httpService.getUsers();
  }
}
