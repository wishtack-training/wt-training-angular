import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserFormReactiveComponent } from './user/user-form-reactive/user-form-reactive.component';


@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserPreviewComponent,
        UserFormReactiveComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
