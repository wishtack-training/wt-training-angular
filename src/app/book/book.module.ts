import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookListComponent,
        BookPreviewComponent,
        BookFormComponent,
        BookSearchComponent,
        BookDetailComponent
    ],
    exports: [
        BookListComponent,
        BookPreviewComponent,
        BookFormComponent,
        BookSearchComponent,
        BookDetailComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class BookModule {
}
