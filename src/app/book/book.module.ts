import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    declarations: [
        BookCardComponent,
        BookFormComponent,
        BookSearchComponent
    ],
    exports: [
        BookCardComponent,
        BookFormComponent,
        BookSearchComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class BookModule {
}
