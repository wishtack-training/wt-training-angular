import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UserListComponent } from './user/user-list/user-list.component';


@NgModule({
    declarations: [
        AppComponent,
        PlaygroundComponent,
        UserListComponent
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
