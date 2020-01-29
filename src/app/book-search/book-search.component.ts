import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mc-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {

  searchForm = new FormGroup({
    keywords: new FormControl()
  });

  search() {
    console.log(this.searchForm.value);
    // @todo {keywords, orderBy, langRestrict}
  }
}
