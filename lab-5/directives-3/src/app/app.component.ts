import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<div>
    <p [valuesize]="valuesize" [defaultSize]="'14px'">Hello Angular</p>
    <p>Angular представляє модульну архітектуру додатку</p>
    <p>Введіть розмір шрифта: <input [(ngModel)]="valuesize" /></p>
    <p>Розмір шрифта зараз {{ valuesize }}</p>
  </div>`,
})
export default class AppComponent {
  protected valuesize: string = '28px';
}
