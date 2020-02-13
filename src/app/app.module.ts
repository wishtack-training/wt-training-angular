import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookCarouselComponent } from './book-carousel/book-carousel.component';
import { BookSearchComponent } from './book-search/book-search/book-search.component';


@NgModule({
  declarations: [
    AppComponent,
    BookCarouselComponent,
    BookCardComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
