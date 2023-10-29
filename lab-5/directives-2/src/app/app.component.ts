import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div>
      <p bold>Вивчаю директиви</p>
      <p>Створення атрибутивних директив</p>
    </div>
    <div>
      <p italic>Вивчаю директиви</p>
      <p>Створення атрибутивних директив</p>
    </div>
    <div>
      <p mousebold>Робота з декоратором @HostListener</p>
      <p>Реагування на покажчик миші</p>
    </div>
    <div>
      <p mouseitalic>Робота з декоратором @HostListener</p>
      <p>Реагування на покажчик миші при допомозі @HostBinding</p>
    </div>
    <div>
      <p hostmousebold>Робота з декоратором @HostListener</p>
      <p>Реагування на покажчик миші при допомозі @HostBinding</p>
    </div>
  `,
})
export default class AppComponent {}
