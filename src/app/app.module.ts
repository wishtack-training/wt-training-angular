import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatsHelper } from './stats/stats-helper';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StatsModule } from './stats/stats.module';
import { UserModule } from './user/user.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        StatsModule,
        UserModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
