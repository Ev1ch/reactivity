import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export default class AppComponent {
  protected isRed = false;
  protected isYellow = false;
  protected blue = 'isBlueBox';
}
