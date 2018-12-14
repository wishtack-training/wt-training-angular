import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchModule } from '../../book-search/book-search.module';
import { CartModule } from '../../cart/cart.module';
import { CartComponent } from '../../cart/cart/cart.component';
import { BookSearchViewComponent } from './book-search-view/book-search-view.component';

export const bookRoutes: Routes = [
    {
        path: 'search',
        component: BookSearchViewComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '**',
        redirectTo: 'search'
    }
];

@NgModule({
    imports: [
        BookSearchModule,
        CartModule,
        CommonModule,
        RouterModule.forChild(bookRoutes)
    ],
    declarations: [
        BookSearchViewComponent
    ],
    exports: [
        BookSearchViewComponent
    ]
})
export class BookViewsModule {
}
