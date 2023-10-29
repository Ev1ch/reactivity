import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: ` <input
    [ngModel]="userName"
    (ngModelChange)="onNameChange($event)"
  />`,
})
export default class ChildComponent {
  @Input()
  protected userName = '';

  @Output()
  protected userNameChange = new EventEmitter<string>();

  protected onNameChange(model: string) {
    this.userName = model;
    this.userNameChange.emit(model);
  }
}
