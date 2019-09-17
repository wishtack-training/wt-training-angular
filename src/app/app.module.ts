import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        CartDetailComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
