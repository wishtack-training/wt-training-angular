import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserFormReactiveComponent } from './user/user-form-reactive/user-form-reactive.component';


@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent,
        UserFormReactiveComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
