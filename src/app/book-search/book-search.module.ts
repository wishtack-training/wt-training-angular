import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookModule } from '../book/book.module';
import { SharedFormModule } from '../shared-form/shared-form.module';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookSearchComponent
    ],
    exports: [
        BookSearchComponent
    ],
    imports: [
        BookModule,
        CommonModule,
        SharedFormModule
    ]
})
export class BookSearchModule {
}
