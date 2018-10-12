import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from '../../book/book-list/book-list.component';
import { BookSearchComponent } from '../../book/book-search/book-search.component';
import { BookModule } from '../../book/book.module';

export const bookRoutes: Routes = [
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
    imports: [
        BookModule,
        CommonModule,
        RouterModule.forChild(bookRoutes)
    ],
    exports: [
        BookModule
    ]
})
export class BookViewsModule {
}
