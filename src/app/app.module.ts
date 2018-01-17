import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserSelectorComponent } from './user/user-selector/user-selector.component';


@NgModule({
    declarations: [
        AppComponent,
        UserSelectorComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
