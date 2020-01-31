import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../cart/cart';
import { BookPicturePipeModule } from './book-picture.pipe';

@Component({
  selector: 'mc-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book: Book;
}

@NgModule({
  declarations: [BookCardComponent],
  exports: [BookCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    BookPicturePipeModule
  ]
})
export class BookCardModule {

}
