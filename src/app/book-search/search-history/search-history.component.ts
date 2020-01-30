import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookQuery } from '../book-query';

@Component({
  selector: 'mc-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent {

  @Input() history: BookQuery[];
  @Output() search = new EventEmitter<BookQuery>();

  onSearch(query: BookQuery) {
    this.search.emit(query);
  }
}
