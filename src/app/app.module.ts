import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserFormReactiveComponent } from './user/user-form-reactive/user-form-reactive.component';
import { UserStore } from './user/user-store';


@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        UserListComponent,
        UserPreviewComponent,
        UserFormReactiveComponent
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
