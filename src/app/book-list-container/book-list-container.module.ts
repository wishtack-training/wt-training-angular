import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCommonModule } from '../book-comon/book-common.module';
import { BookListContainerComponent } from './book-list-container/book-list-container.component';

@NgModule({
    declarations: [
        BookListContainerComponent
    ],
    exports: [
        BookListContainerComponent
    ],
    imports: [
        BookCommonModule,
        CommonModule
    ]
})
export class BookListContainerModule {

}
