import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserSelectorComponent } from './user/user-selector/user-selector.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserListComponent } from './user/user-list/user-list.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        UserListComponent,
        UserPreviewComponent,
        UserSelectorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class AppModule {

}
