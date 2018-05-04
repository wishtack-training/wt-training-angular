import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserFormReactiveComponent } from './user/user-form-reactive/user-form-reactive.component';
import { DemoComponent } from './demo/demo.component';
import { AppConfig, UserStore } from './user/user-store';


@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent,
        UserFormReactiveComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
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
