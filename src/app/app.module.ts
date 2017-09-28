import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserStore } from './user/user-store';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [
        UserStore
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
