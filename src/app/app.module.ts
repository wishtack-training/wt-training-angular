import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HelpViewComponent } from './views/help-view/help-view.component';

@NgModule({
    declarations: [
        AppComponent,
        HelpViewComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, {
            preloadingStrategy: PreloadAllModules
        }),
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
