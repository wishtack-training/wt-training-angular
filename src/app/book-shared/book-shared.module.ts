import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
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
        SharedModule
    ]
})
export class BookSharedModule {
}
