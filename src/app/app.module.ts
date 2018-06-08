import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthorFormComponent } from './author/author-form/author-form.component';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BookModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
