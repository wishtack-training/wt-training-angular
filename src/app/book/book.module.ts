import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookStore } from './book-store';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookListComponent,
        BookPreviewComponent,
        BookFormComponent,
        BookSearchComponent
    ],
    exports: [
        BookListComponent,
        BookPreviewComponent,
        BookFormComponent,
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
