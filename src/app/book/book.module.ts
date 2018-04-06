/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { SharedModule } from '../shared.module';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookSearchComponent,
        BookPreviewComponent
    ],
    exports: [
        BookSearchComponent,
        BookPreviewComponent
    ],
    imports: [
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class BookModule {

}
