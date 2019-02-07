import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookSearchComponent
    ],
    exports: [
        BookSearchComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class BookSearchModule {
}
