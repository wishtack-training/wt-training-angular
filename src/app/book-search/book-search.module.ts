import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookSearchComponent
    ],
    exports: [
        BookSearchComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BookSearchModule {
}
