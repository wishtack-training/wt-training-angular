import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserStore } from './user/user-store';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UserModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
