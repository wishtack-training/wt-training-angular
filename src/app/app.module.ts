import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { SandwichPreviewComponent } from './sandwich/sandwich-preview/sandwich-preview.component';

@NgModule({
    declarations: [
        AppComponent,
        SandwichPreviewComponent,
        CartDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
