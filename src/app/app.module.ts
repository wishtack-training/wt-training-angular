import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart/cart.component';
import { DemoComponent } from './demo/demo/demo.component';
import { FormDemoComponent } from './demo/form-demo/form-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        DemoComponent,
        FormDemoComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
