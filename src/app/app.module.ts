import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';


@NgModule({
    declarations: [
        AppComponent,
        PlaygroundComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
