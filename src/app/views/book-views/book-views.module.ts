import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookSearchModule } from '../../book-search/book-search.module';
import { BookSearchViewComponent } from './book-search-view/book-search-view.component';

export const bookRoutes = [
    {
        path: 'search',
        component: BookSearchViewComponent
    }
];

@NgModule({
    declarations: [
        BookSearchViewComponent
    ],
    imports: [
        BookSearchModule,
        CommonModule,
        RouterModule.forChild(bookRoutes)
    ]
})
export class BookViewsModule {
}
