import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookSearchModule } from './book-search/book-search.module';
import { BookModule } from './book/book.module';
import { PlaygroundModule } from './playground/playground.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BookModule,
        BookSearchModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        PlaygroundModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
