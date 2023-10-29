import { Input, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<p>Ім’я користувача: {{ userName }}</p>
    <p>Вік користувача: {{ userAge }}</p>
    <button (click)="change(true)">+</button>
    <button (click)="change(false)">-</button>`,
})
export default class ChildComponent {
  @Input() protected userName = '';

  protected _userAge = 0;

  @Input()
  protected set userAge(age: number) {
    if (age < 0) {
      this._userAge = 0;
    } else if (age > 100) {
      this._userAge = 100;
    } else {
      this._userAge = age;
    }
  }

  protected get userAge() {
    return this._userAge;
  }

  @Output()
  protected onChanged = new EventEmitter<boolean>();

  protected change(increased: boolean) {
    this.onChanged.emit(increased);
  }
}
