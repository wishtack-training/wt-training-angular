import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitySelectorComponent } from './city/city-selector/city-selector.component';
import { UserTeamAModule } from './user-team-a/user-team-a.module';
import { UserTeamBModule } from './user-team-b/user-team-b.module';

@NgModule({
    declarations: [
        AppComponent,
        CitySelectorComponent
    ],
    imports: [
        BrowserModule,
        UserTeamAModule,
        UserTeamBModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
