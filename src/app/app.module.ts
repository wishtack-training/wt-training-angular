import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ZoneModule } from './zone/zone.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ZoneModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
