import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCommonModule } from '../book-common/book-common.module';
import { SharedFormModule } from '../shared-form/shared-form.module';
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
        SharedFormModule
    ]
})
export class BookSearchModule {
}
