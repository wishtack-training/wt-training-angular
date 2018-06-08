import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from '../../book/book-list/book-search.component';
import { BookModule } from '../../book/book.module';
import { BookCartViewComponent } from './book-cart-view/book-cart-view.component';
import { BookDetailViewComponent } from './book-detail-view/book-detail-view.component';

const bookRoutes: Routes = [
    {
        path: 'cart',
        component: BookCartViewComponent
    },
    {
        path: 'search',
        component: BookSearchComponent
    },
    {
        path: 'detail/:bookId',
        component: BookDetailViewComponent
    }
];

@NgModule({
    declarations: [
        BookCartViewComponent,
        BookDetailViewComponent
    ],
    imports: [
        BookModule,
        CommonModule,
        RouterModule.forChild(bookRoutes)
    ]
})
export class BookRoutingModule {
}
