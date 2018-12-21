import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchModule } from '../../book-search/book-search.module';
import { BookSearchComponent } from '../../book-search/book-search/book-search.component';
import { CartModule } from '../../cart/cart.module';
import { CartComponent } from '../../cart/cart/cart.component';

const bookRoutes: Routes = [
    {
        path: 'search',
        component: BookSearchComponent
    },
    {
        path: 'cart',
        component: CartComponent
    }
];

@NgModule({
    imports: [
        BookSearchModule,
        CartModule,
        CommonModule,
        RouterModule.forChild(bookRoutes)
    ]
})
export class BookViewsModule {
}
