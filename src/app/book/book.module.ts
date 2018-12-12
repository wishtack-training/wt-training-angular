import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedFormModule } from '../shared-form/shared-form.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListContainerComponent } from './book-list-container/book-list-container.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';

@NgModule({
    declarations: [
        BookFormComponent,
        BookListComponent,
        BookListContainerComponent,
        BookPreviewComponent
    ],
    exports: [
        BookFormComponent,
        BookListComponent,
        BookListContainerComponent,
        BookPreviewComponent
    ],
    imports: [
        CommonModule,
        SharedFormModule
    ]
})
export class BookModule {
}
