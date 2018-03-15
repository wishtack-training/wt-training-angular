import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { UserListViewComponent } from './views/user-routing/user-list-view/user-list-view.component';
import { UserDetailViewComponent } from './views/user-routing/user-detail-view/user-detail-view.component';


@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        LandingComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        SharedModule
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [
        LandingComponent
    ]
})
export class AppModule {
}
