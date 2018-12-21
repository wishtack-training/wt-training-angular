import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookListContainerModule } from './book-list-container/book-list-container.module';
import { BookSearchModule } from './book-search/book-search.module';
import { CartModule } from './cart/cart.module';
import { LayoutDefaultModule } from './layout-default/layout-default.module';
import { PlaygroundModule } from './playground/playground.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BookListContainerModule,
        BookSearchModule,
        BrowserAnimationsModule,
        BrowserModule,
        CartModule,
        HttpClientModule,
        LayoutDefaultModule,
        MatListModule,
        PlaygroundModule,
        SharedModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
