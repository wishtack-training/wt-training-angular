import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
