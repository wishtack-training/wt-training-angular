import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export enum Language {
  En = 'en',
  Fr = 'fr'
}

export enum SortBy {
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
  SortBy = SortBy;

  searchForm = new FormGroup({
    keywords: new FormControl(null, [
      Validators.required
    ]),
    language: new FormControl(Language.En),
    sortBy: new FormControl(SortBy.Relevance)
  });

  ngOnInit(): void {
  }

  search() {
    console.log(this.searchForm.value);
  }
}
