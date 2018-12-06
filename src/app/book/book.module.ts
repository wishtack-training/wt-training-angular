import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListContainerComponent } from './book-list-container/book-list-container.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookFormComponent,
        BookListComponent,
        BookListContainerComponent,
        BookSearchComponent
    ],
    exports: [
        BookFormComponent,
        BookListComponent,
        BookListContainerComponent,
        BookSearchComponent
    ],
    imports: [
        CommonModule,

        /* Required by <wt-book-form>. */
        MatButtonModule,
        ReactiveFormsModule

    ]
})
export class BookModule {

}
