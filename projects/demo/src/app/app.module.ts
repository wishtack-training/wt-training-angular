import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibAModule } from '@wishtack/lib-a';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LibAModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
