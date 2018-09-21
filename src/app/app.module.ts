import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
        HttpClientModule,
        UserModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
