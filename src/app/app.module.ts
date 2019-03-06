import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SandwichGalleryComponent } from './sandwich/sandwich-gallery/sandwich-gallery.component';
import { SandwichPreviewComponent } from './sandwich/sandwich-preview/sandwich-preview.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        SandwichGalleryComponent,
        SandwichPreviewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
