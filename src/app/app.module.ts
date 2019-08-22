import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DemoComponent } from './demo/demo.component';
import { HelpComponent } from './help/help.component';
import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';
import { SandwichPreviewComponent } from './sandwich-preview/sandwich-preview.component';
import { SandwichSearchComponent } from './sandwich-search/sandwich-search.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        CartComponent,
        SandwichPreviewComponent,
        SandwichFormComponent,
        SandwichSearchComponent,
        HelpComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
