import { Component } from '@angular/core';

@Component({
  selector: 'interpollation-app',
  template: `<p>Ім'я: {{ name }}</p>
    <p>Вік: {{ age }}</p>`,
})
export default class AppComponent {
  protected name = 'Tom';
  protected age = 25;
}
