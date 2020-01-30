import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookPicturePipe } from './book-card/book-picture.pipe';
import { BookCarouselComponent } from './book-carousel/book-carousel.component';
import { BookSearchFormModule } from './book-search/book-search-form/book-search-form.component';
import { BookSearchHistoryComponent } from './book-search/book-search-history/book-search-history.component';
import { BookSearchComponent } from './book-search/book-search/book-search.component';
import { CartComponent } from './cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCarouselComponent,
    BookCardComponent,
    CartComponent,
    BookSearchComponent,
    BookSearchHistoryComponent,
    BookPicturePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    FlexLayoutModule,
    BookSearchFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
