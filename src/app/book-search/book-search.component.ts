import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, delay, filter, map, onErrorResumeNext, retry, takeUntil, timeout } from 'rxjs/operators';

export enum Language {
  En = 'en',
  Fr = 'fr'
}

export enum SortBy {
  Newest = 'newest',
  Relevance = 'relevance'
}

const constraintConfig = [
  {
    source: 'clientId',
    url: '/get-client-name', // { clientName: 'asdasd' }
    onPending: {
      disable: [
        'clientId',
        'clientName'
      ]
    },
    cancelOn: [
      'clientName'
    ]
  }
]


@Component({
  selector: 'ag-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  Language = Language;
  SortBy = SortBy;

  searchForm = new FormGroup({
    keywords: new FormControl(null, [Validators.required]),
    language: new FormControl(Language.En),
    sortBy: new FormControl(SortBy.Relevance)
  });

  constructor(private _httpClient: HttpClient) {}

  ngOnInit(): void {
    this.resetOnCondition({
      source: 'keywords',
      condition: value =>
        value === 'bonjour' ? { language: Language.Fr } : null
    });
  }

  search() {
    this._httpClient
      .get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: this.searchForm.value.keywords
        }
      })
      .subscribe({
        next: data => console.log(data),
        error: err => console.error(err)
      });
  }

  private resetOnCondition({
    source,
    condition
  }: {
    condition: (value) => { language: Language };
    source: string;
  }) {

    const value$ = this.searchForm.get(source).valueChanges;
    const action$ = value$
      .pipe(
        map(value => condition(value)),
        delay(1000),
        filter(action => action != null)
      );

    const language$ = this.searchForm.get('language').valueChanges;

    action$
      .pipe(
        takeUntil(language$)
      )
      .subscribe(action => {
      this.searchForm.patchValue(action);
    });

  }
}
