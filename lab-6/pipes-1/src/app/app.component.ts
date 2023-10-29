import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div>Без форматування: {{ date }}</div>
    <div>З форматуванням: {{ date | date }}</div>
    <div>{{ welcome | uppercase }}</div>
    <div>{{ welcome | lowercase }}</div>
    <div>{{ percentage | percent }}</div>
    <div>{{ percentage | currency }}</div>
    <div>{{ welcome | slice : 3 }}</div>
    <div>{{ welcome | slice : 6 : 11 }}</div>
    <div>{{ newDate | date : 'dd/MM/yyyy' }}</div>
    <div>{{ pi | number : '2.1-2' }}</div>
    <div>{{ pi | number : '3.5-5' }}</div>
    <div>{{ money | currency : 'UAH' : 'code' }}</div>
    <div>{{ money | currency : 'UAH' : 'symbol-narrow' }}</div>
    <div>{{ money | currency : 'UAH' : 'symbol' : '1.1-1' }}</div>
    <div>{{ money | currency : 'UAH' : 'symbol-narrow' : '1.1-1' }}</div>
    <div>{{ money | currency : 'UAH' : 'Тільки сьогодні за ціною ' }}</div>
    <div>{{ message | slice : 6 : 11 | uppercase }}</div>
    <div>
      Число до форматування: {{ x }}<br />Число після форматування:
      {{ x | format }}
    </div>
    <hr />
    <div>{{ users | join }}</div>
    <div>{{ users | join : 1 }}</div>
    <div>{{ users | join : 1 : 3 }}</div>
    <div>{{ 2 | square }}</div>
  `,
})
export default class AppComponent {
  protected date = new Date(1961, 3, 12);

  protected welcome = 'Hello World!';

  protected percentage = 0.14;

  protected newDate = Date.now();

  protected pi = 3.1415;

  protected money = 23.45;

  protected message = 'Hello World!';

  protected x = 15.45;

  protected users = ['Tom', 'Alice', 'Sam', 'Kate', 'Bob'];
}
