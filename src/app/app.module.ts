import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserStore } from './user/user-store';


@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        UserListComponent,
        UserFormComponent,
        UserPreviewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        UserStore
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
