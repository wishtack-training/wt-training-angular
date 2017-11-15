import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';


@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserPreviewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
