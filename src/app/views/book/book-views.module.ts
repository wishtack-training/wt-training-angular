import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from '../../book/book-search/book-search.component';
import { BookModule } from '../../book/book.module';

export const bookRoutes: Routes = [
    {
        path: 'search',
        component: BookSearchComponent
    },
    {
        path: '',
        redirectTo: 'search'
    }
];

@NgModule({
    imports: [
        BookModule,
        CommonModule,
        RouterModule.forChild(bookRoutes)
    ]
})
export class BookViewsModule {
}
