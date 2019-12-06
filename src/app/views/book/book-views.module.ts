import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart/cart.component';
import { BookSearchComponent } from './book-search/book-search.component';

export const bookRoutes = [
  {
    path: 'search',
    component: BookSearchComponent
  },
  {
    path: '**',
    redirectTo: 'search'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bookRoutes)
  ]
})
export class BookViewsModule {
}
