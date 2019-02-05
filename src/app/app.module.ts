import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { CartComponent } from './cart/cart/cart.component';
import { CityPreviewComponent } from './demo/city-preview/city-preview.component';
import { DemoComponent } from './demo/demo/demo.component';
import { FormDemoComponent } from './demo/form-demo/form-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        DemoComponent,
        FormDemoComponent,
        CityPreviewComponent,
        BookFormComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
