import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserPreviewComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
