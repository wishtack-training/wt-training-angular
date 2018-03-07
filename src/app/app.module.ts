import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';


@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        UserListComponent,
        UserPreviewComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
