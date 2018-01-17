import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserSelectorComponent } from './user/user-selector/user-selector.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        UserPreviewComponent,
        UserSelectorComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
