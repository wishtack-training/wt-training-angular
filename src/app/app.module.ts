import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CityInfoPreviewComponent } from './city-info-preview/city-info-preview.component';
import { DemoComponent } from './demo/demo.component';
import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';
import { SandwichListComponent } from './sandwich-list/sandwich-list.component';
import { SandwichPreviewComponent } from './sandwich-preview/sandwich-preview.component';

@NgModule({
    declarations: [
        AppComponent,
        CartDetailComponent,
        DemoComponent,
        CityInfoPreviewComponent,
        SandwichFormComponent,
        SandwichPreviewComponent,
        SandwichListComponent
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
