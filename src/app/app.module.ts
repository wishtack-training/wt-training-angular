import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserSelectorComponent } from './user/user-selector/user-selector.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        UserPreviewComponent,
        UserSelectorComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class AppModule {
}
