import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookSearchComponent } from './book/book-list/book-search.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { AuthorFormComponent } from './author/author-form/author-form.component';

@NgModule({
    declarations: [
        AppComponent,
        BookSearchComponent,
        BookPreviewComponent,
        BookFormComponent,
        AuthorFormComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
