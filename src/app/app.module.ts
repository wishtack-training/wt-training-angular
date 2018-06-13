import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookPreviewComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
