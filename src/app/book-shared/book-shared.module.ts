import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
        CommonModule
    ]
})
export class BookSharedModule {
}
