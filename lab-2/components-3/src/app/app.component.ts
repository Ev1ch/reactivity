import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<child-comp [(userName)]="name"></child-comp>
    <div>Обране ім’я: {{ name }}</div>`,
})
export default class AppComponent {
  protected name = 'Tom';
}
