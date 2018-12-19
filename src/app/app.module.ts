import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListContainerComponent } from './book/book-list-container/book-list-container.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';
import { PlaygroundModule } from './playground/playground.module';

@NgModule({
    declarations: [
        AppComponent,
        BookListContainerComponent,
        BookListComponent,
        BookPreviewComponent
    ],
    imports: [
        BrowserModule,
        PlaygroundModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
