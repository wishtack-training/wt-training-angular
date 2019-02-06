import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { CartComponent } from './cart/cart/cart.component';
import { DemoModule } from './demo/demo.module';

@NgModule({
    declarations: [
        AppComponent,
        BookFormComponent,
        CartComponent,
        BookSearchComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        DemoModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
