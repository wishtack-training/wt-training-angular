import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitySelectorComponent } from './city/city-selector/city-selector.component';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [
        AppComponent,
        CitySelectorComponent
    ],
    imports: [
        BrowserModule,
        UserModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
