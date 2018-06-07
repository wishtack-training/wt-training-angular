import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { AuthorFormComponent } from './author/author-form/author-form.component';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookPreviewComponent,
        BookFormComponent,
        AuthorFormComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
