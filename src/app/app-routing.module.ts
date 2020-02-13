import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/book-search/book-search.module').then(
        m => m.BookSearchModule
      )
  },
  {
    path: '**',
    redirectTo: 'search'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
