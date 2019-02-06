import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { CartComponent } from './cart/cart/cart.component';
import { DemoModule } from './demo/demo.module';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent
    ],
    imports: [
        AppRoutingModule,
        BookModule,
        BrowserAnimationsModule,
        BrowserModule,
        DemoModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
