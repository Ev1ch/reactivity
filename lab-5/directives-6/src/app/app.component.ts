import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <button (click)="toggle()">Toggle</button>
    <p *otherIf="condition" class="otherif a">(A) Condition is false.</p>
    <p *otherIf="!condition" class="otherif b">
      (B) Although the condition is true, this paragraph is displayed.
    </p>
  `,
})
export default class AppComponent {
  protected condition = true;

  protected toggle() {
    this.condition = !this.condition;
  }
}
