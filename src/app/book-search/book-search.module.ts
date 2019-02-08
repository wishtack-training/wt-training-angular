import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookSharedModule } from '../book-shared/book-shared.module';
import { SharedModule } from '../shared/shared.module';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookSearchComponent
    ],
    exports: [
        BookSearchComponent
    ],
    imports: [
        BookSharedModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class BookSearchModule {
}
