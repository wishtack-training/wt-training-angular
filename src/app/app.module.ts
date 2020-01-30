import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookCarouselComponent } from './book-carousel/book-carousel.component';
import { BookSearchComponent } from './book-search/book-search/book-search.component';
import { SearchHistoryComponent } from './book-search/search-history/search-history.component';
import { CartComponent } from './cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCarouselComponent,
    BookCardComponent,
    CartComponent,
    BookSearchComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
