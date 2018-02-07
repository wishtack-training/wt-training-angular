import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserFormComponent } from './user/user-form/user-form.component';


@NgModule({
    declarations: [
        AppComponent,
        PlaygroundComponent,
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent
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
