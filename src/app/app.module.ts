import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignatureComponent } from './signature/signature.component';
import { UserModule } from './user/user.module';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        SignatureComponent
    ],
    imports: [
        BrowserModule,
        UserModule
    ]
})
export class AppModule {
}
