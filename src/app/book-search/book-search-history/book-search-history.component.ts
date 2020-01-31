import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { BookQuery } from '../book-query';

@Component({
  selector: 'mc-book-search-history',
  templateUrl: './book-search-history.component.html',
  styleUrls: ['./book-search-history.component.css']
})
export class BookSearchHistoryComponent {

  @Input() history: BookQuery[];
  @Output() search = new EventEmitter<BookQuery>();

  onSearch(query: BookQuery) {
    this.search.emit(query);
  }
}

@NgModule({
  declarations: [BookSearchHistoryComponent],
  exports: [BookSearchHistoryComponent],
  imports: [
    CommonModule
  ]
})
export class BookSearchHistoryModule {

}
