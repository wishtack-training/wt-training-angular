import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LandingModule } from './views/landing/landing.module';
import { UserViewModule } from './views/user-view/user-view.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LandingModule,
        RouterModule.forRoot(APP_ROUTES),
        UserViewModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
