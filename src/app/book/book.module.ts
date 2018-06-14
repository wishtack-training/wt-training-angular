import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';

@NgModule({
    declarations: [
        BookListComponent,
        BookPreviewComponent
    ],
    exports: [
        BookListComponent,
        BookPreviewComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class BookModule {
}
