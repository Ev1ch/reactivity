import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import AppComponent from './app.component';
import ValuesizeDirective from './valuesize.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ValuesizeDirective],
  bootstrap: [AppComponent],
})
export default class AppModule {}
