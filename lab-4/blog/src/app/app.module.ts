import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, PostFormComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: 'API_URL',
      useFactory: () => 'http://localhost:3000/posts',
      deps: [],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
