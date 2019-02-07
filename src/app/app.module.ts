import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSearchModule } from './book-search/book-search.module';
import { LayoutDefaultModule } from './layout-default/layout-default.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        /* @TODO: These modules should not stay here. */
        BookSearchModule,
        LayoutDefaultModule,
        MatListModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
