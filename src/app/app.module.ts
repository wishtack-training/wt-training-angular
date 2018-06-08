import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookSearchComponent } from './book/book-list/book-search.component';
import { BookModule } from './book/book.module';
import { LandingModule } from './landing/landing.module';
import { LandingComponent } from './landing/landing/landing.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BookModule,
        BrowserModule,
        BrowserAnimationsModule,
        LandingModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
