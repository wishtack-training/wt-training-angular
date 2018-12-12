import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookListContainerComponent } from './book/book-list-container/book-list-container.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';
import { PlaygroundModule } from './playground/playground.module';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookListContainerComponent,
        BookPreviewComponent,
        BookFormComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        PlaygroundModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
