import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    /* 2. move this to a search method. */
    /* 3. use the keywords in the URL. */
    this._httpClient.get('https://www.googleapis.com/books/v1/volumes?q=ANGULAR').subscribe(data => {
      /* 4. transform data to Item[]. */
      console.log(data);
      /* 5. display items. */
      /* 6. buy button should add item to cart. */
    });
  }

}
