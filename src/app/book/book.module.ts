import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
    declarations: [
        BookListComponent,
        BookPreviewComponent,
        BookFormComponent
    ],
    exports: [
        BookListComponent,
        BookPreviewComponent,
        BookFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class BookModule {
}
