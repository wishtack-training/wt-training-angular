import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCommonModule } from '../book-comon/book-common.module';
import { SharedFormsModule } from '../shared-forms/shared-forms.module';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookSearchComponent
    ],
    exports: [
        BookSearchComponent
    ],
    imports: [
        BookCommonModule,
        CommonModule,
        SharedFormsModule
    ]
})
export class BookSearchModule {
}
