import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { BookModule } from './book/book.module';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
    {
        path: 'books',
        component: BookSearchComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '**',
        redirectTo: 'books'
    }
];

@NgModule({
    imports: [
        BookModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
