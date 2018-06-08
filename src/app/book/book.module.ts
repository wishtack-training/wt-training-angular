import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AuthorModule } from '../author/author.module';
import { SharedModule } from '../shared/shared.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookSearchComponent } from './book-list/book-search.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';

@NgModule({
    declarations: [
        BookSearchComponent,
        BookPreviewComponent,
        BookFormComponent
    ],
    exports: [
        BookSearchComponent,
        BookPreviewComponent,
        BookFormComponent
    ],
    imports: [
        AuthorModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class BookModule {
}
