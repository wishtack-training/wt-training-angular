import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from '../../book/book-list/book-list.component';
import { BookSearchComponent } from '../../book/book-search/book-search.component';
import { BookModule } from '../../book/book.module';
import { BookDetailViewComponent } from './book-detail-view/book-detail-view.component';
import { bookRouteResolver } from './book-route-resolver';

export const bookRoutes: Routes = [
    {
        path: bookRouteResolver.DETAIL_PATH + '/:bookId',
        component: BookDetailViewComponent
    },
    {
        path: 'list',
        component: BookListComponent
    },
    {
        path: 'search',
        component: BookSearchComponent
    }
];

@NgModule({
    declarations: [
        BookDetailViewComponent
    ],
    exports: [
        BookModule,
        BookDetailViewComponent
    ],
    imports: [
        BookModule,
        CommonModule,
        RouterModule.forChild(bookRoutes)
    ]
})
export class BookViewsModule {
}
