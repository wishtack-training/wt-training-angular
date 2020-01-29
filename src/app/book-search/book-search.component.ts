import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mc-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  searchForm = new FormGroup({
    keywords: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  search() {
    const {keywords} = this.searchForm.value;
    const result$ = this._httpClient.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: keywords
      }
    });

    result$.subscribe(data => {
    });

    // @todo {keywords, orderBy, langRestrict}
  }
}
