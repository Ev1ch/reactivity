import { Component } from '@angular/core';

@Component({
  selector: 'attributes-app',
  template: `<p>Ім'я: {{ name }}</p>
    <p>Вік: {{ age }}</p>
    <input type="text" [value]="name" /><br />
    <input type="text" [value]="age" />
    <p [textContent]="name"></p>
    <table border="1">
      <tr>
        <td [attr.colspan]="colspan">One-Two</td>
      </tr>
      <tr>
        <td>Three</td>
        <td>Four</td>
      </tr>
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </table>`,
})
export default class AppComponent {
  protected name = 'Tom';
  protected age = 25;
  protected colspan = 2;
}
