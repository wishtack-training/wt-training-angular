import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HelpViewComponent } from './views/help-view/help-view.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
    declarations: [
        AppComponent,
        HelpViewComponent,
        PlaygroundComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule,
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
