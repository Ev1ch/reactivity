import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h2>Кількість кліків: {{ clicks }}</h2>
    <child-comp (onChanged)="onChanged($event)"></child-comp>
  `,
})
export default class AppComponent {
  protected name = 'Tom';

  protected age = 24;

  protected clicks = 0;

  protected onChanged(increased: boolean) {
    increased == true ? this.clicks++ : this.clicks--;
  }
}
