import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../cart/cart';
import { BookSearchService } from '../book-search.service';

export enum Language {
  En = 'en',
  Fr = 'fr'
}

export enum OrderBy {
  Newest = 'newest',
  Relevance = 'relevance'
}

@Component({
  selector: 'ag-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  Language = Language;
  OrderBy = OrderBy;

  books: Book[];

  searchForm = new FormGroup({
    keywords: new FormControl(null, [Validators.required]),
    language: new FormControl(Language.En),
    orderBy: new FormControl(OrderBy.Relevance)
  });

  constructor(private _bookSearchService: BookSearchService) {
  }

  ngOnInit() {
  }

  search() {
    this.books = null;

    this._bookSearchService.search(this.searchForm.value).subscribe(books => {
      this.books = books;
    });
  }

}
