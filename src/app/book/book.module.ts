import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class BookModule {
}
