import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutDefaultModule } from './layout-default/layout-default.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        LayoutDefaultModule,
        MatListModule,
        environment.production ?
            [] :
            [
                AkitaNgDevtools.forRoot(),
                AkitaNgRouterStoreModule.forRoot()
            ]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
