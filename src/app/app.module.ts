import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DemoComponent } from './demo/demo.component';
import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';
import { SandwichPreviewComponent } from './sandwich-preview/sandwich-preview.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        CartComponent,
        SandwichPreviewComponent,
        SandwichFormComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
