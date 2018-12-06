import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from '../../book/book-search/book-search.component';
import { BookModule } from '../../book/book.module';

export const routes: Routes = [
    {
        path: 'search',
        component: BookSearchComponent
    }
];

@NgModule({
    imports: [
        BookModule,
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class BookViewsModule {
}
