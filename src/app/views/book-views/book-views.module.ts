import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookSearchModule } from '../../book-search/book-search.module';
import { BookSearchComponent } from '../../book-search/book-search/book-search.component';

export const bookRoutes = [
    {
        path: 'search',
        component: BookSearchComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        BookSearchModule,
        CommonModule,
        RouterModule.forChild(bookRoutes)
    ]
})
export class BookViewsModule {
}
