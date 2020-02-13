import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { Book } from '../cart/cart';

@Component({
  selector: 'ag-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book: Book;
}

@NgModule({
  declarations: [BookCardComponent],
  exports: [BookCardComponent],
  imports: [CommonModule]
})
export class BookCardModule {
}
