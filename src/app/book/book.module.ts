import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedFormModule } from '../shared-form/shared-form.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookFormComponent,
        BookListComponent,
        BookPreviewComponent,
        BookSearchComponent
    ],
    exports: [
        BookFormComponent,
        BookListComponent,
        BookPreviewComponent,
        BookSearchComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedFormModule
    ]
})
export class BookModule {
}
