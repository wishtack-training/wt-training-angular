import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [BookSearchComponent],
    imports: [
        CommonModule
    ],
    exports: [BookSearchComponent]
})
export class BookSearchModule {
}
