import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserFormReactiveComponent } from './user/user-form-reactive/user-form-reactive.component';
import { UserStore } from './user/user-store';
import { UserStatsComponent } from './user/user-stats/user-stats.component';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserPreviewComponent,
        UserFormReactiveComponent,
        UserStatsComponent
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
