import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserListComponent } from './user/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
