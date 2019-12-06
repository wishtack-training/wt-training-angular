import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookViewsModule } from './views/book/book-views.module';

const routes: Routes = [
  {
    path: 'book',
    /* Eager. */
    loadChildren: () => BookViewsModule
  },
  {
    path: 'cart',
    /* Lazy. */
    loadChildren: () => import('./views/cart/cart-views.module').then(m => m.CartViewsModule)
  },
  {
    path: '**',
    redirectTo: 'book'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
