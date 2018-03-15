import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
        UserModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
