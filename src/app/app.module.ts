import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SandwichGalleryComponent } from './sandwich/sandwich-gallery/sandwich-gallery.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        SandwichGalleryComponent
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
