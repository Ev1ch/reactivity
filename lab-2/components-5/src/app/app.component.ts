import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<child-comp [name]="name"></child-comp>
    <input type="text" [(ngModel)]="name" />`,
})
export default class AppComponent {
  protected name = 'Tom';
}
