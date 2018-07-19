import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UserModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
