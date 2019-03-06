import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SandwichFormComponent } from './sandwich/sandwich-form/sandwich-form.component';
import { SandwichGalleryComponent } from './sandwich/sandwich-gallery/sandwich-gallery.component';
import { SandwichPreviewComponent } from './sandwich/sandwich-preview/sandwich-preview.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        SandwichGalleryComponent,
        SandwichPreviewComponent,
        SandwichFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
