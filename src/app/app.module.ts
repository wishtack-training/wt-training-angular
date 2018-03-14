import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
