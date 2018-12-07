import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule } from '@angular/material';
import { DynamicModule } from 'ng-dynamic-component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListContainerComponent } from './book-list-container/book-list-container.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookFormComponent,
        BookListComponent,
        BookListContainerComponent,
        BookSearchComponent,
        BookGridComponent
    ],
    exports: [
        BookFormComponent,
        BookListComponent,
        BookListContainerComponent,
        BookSearchComponent,
        BookGridComponent
    ],
    imports: [
        CommonModule,

        DynamicModule.withComponents([
            BookGridComponent,
            BookListComponent
        ]),

        /* Required by <wt-book-form>. */
        MatButtonModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        LayoutModule

    ]
})
export class BookModule {

}
