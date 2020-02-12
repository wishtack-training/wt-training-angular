import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../cart/cart';

@Component({
  selector: 'ag-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;

  constructor() {
  }

  ngOnInit(): void {
  }

}
