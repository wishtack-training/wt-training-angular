import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from '../../book/book-list/book-search.component';
import { BookModule } from '../../book/book.module';
import { BookDetailViewComponent } from './book-detail-view/book-detail-view.component';

const bookRoutes: Routes = [
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
