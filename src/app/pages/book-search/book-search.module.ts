import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookCardModule } from '../../book-card/book-card.component';

import { BookSearchRoutingModule } from './book-search-routing.module';
import { BookSearchComponent } from './book-search.component';

@NgModule({
  declarations: [BookSearchComponent],
  imports: [
    CommonModule,
    BookCardModule,
    BookSearchRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookSearchModule {
}
