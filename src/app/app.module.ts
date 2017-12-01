import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UserCoreModule } from './user-core/user-core.module';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UserCoreModule.forRoot(),
        UserModule
    ]
})
export class AppModule {

}
