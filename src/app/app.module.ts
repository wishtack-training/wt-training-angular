import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookCarouselComponent } from './book-carousel/book-carousel.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { CartComponent } from './cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCarouselComponent,
    BookCardComponent,
    CartComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
