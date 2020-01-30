import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { BookQuery, Language, Order } from '../book-query';

@Component({
  selector: 'mc-book-search-form',
  templateUrl: './book-search-form.component.html',
  styleUrls: ['./book-search-form.component.css']
})
export class BookSearchFormComponent implements OnChanges {

  @Input() query: BookQuery;
  @Output() queryChange: Observable<BookQuery>;

  Order = Order;
  Language = Language;

  searchForm = new FormGroup({
    keywords: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    language: new FormControl(Language.English),
    order: new FormControl(Order.Newest)
  });

  constructor() {
    this.queryChange = this.searchForm.valueChanges
      .pipe(distinctUntilChanged());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.query && this.query != null) {
      this.searchForm.patchValue(this.query, {
        emitEvent: false
      });
    }
  }

}

@NgModule({
  declarations: [BookSearchFormComponent],
  exports: [BookSearchFormComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class BookSearchFormModule {
}
