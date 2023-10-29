import { Component } from '@angular/core';

import Item from '../domain/Item';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export default class App {
  protected text = '';

  protected price = 0;

  protected items: Item[] = [
    { purchase: 'Хліб', done: false, price: 15.9 },
    { purchase: 'Вершкове масло', done: false, price: 60 },
    { purchase: 'Картопля', done: true, price: 22.6 },
    { purchase: 'Сир', done: false, price: 310 },
  ];

  public addItem(text: string, price: number) {
    if (text === null || text.trim() === '' || price === null || price <= 0) {
      return;
    }

    this.items.push(new Item(text, price));
  }
}
