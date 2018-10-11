import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedFormModule } from '../shared-form/shared-form.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';

@NgModule({
    declarations: [
        BookFormComponent,
        BookListComponent,
        BookPreviewComponent
    ],
    exports: [
        BookFormComponent,
        BookListComponent,
        BookPreviewComponent
    ],
    imports: [
        CommonModule,
        SharedFormModule
    ]
})
export class BookModule {
}
