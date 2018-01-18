import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserSelectorComponent } from './user/user-selector/user-selector.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserFormReactiveComponent } from './user/user-form-reactive/user-form-reactive.component';


@NgModule({
    declarations: [
        AppComponent,
        UserPreviewComponent,
        UserSelectorComponent,
        UserListComponent,
        UserFormComponent,
        UserFormReactiveComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
