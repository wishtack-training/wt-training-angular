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

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  search() {
    console.log(this.searchForm.valid);
    console.log(this.searchForm.value);
    // @todo {keywords, orderBy, langRestrict}
  }
}
