import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { BookCartViewComponent } from './views/book-routing/book-cart-view/book-cart-view.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LandingModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
