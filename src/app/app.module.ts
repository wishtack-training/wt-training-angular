import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NavComponent } from './nav/nav.component';
import { SandwichFormComponent } from './sandwich/sandwich-form/sandwich-form.component';
import { SandwichGalleryComponent } from './sandwich/sandwich-gallery/sandwich-gallery.component';
import { SandwichPreviewComponent } from './sandwich/sandwich-preview/sandwich-preview.component';
import { SandwichSearchComponent } from './sandwich/sandwich-search/sandwich-search.component';
import { SandwichSearchViewComponent } from './views/sandwich-search-view/sandwich-search-view.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        SandwichGalleryComponent,
        SandwichPreviewComponent,
        SandwichFormComponent,
        SandwichSearchComponent,
        NavComponent,
        SandwichSearchViewComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatSliderModule,
        MatRadioModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
