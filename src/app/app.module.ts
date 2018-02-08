import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserFormReactiveComponent } from './user/user-form-reactive/user-form-reactive.component';
import { UserStore } from './user/user-store';
import { UserConfig } from './user/user-config';

class MyFavoriteClientUserConfig extends UserConfig {

    isInlineEdit = false;

}


@NgModule({
    declarations: [
        AppComponent,
        PlaygroundComponent,
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent,
        UserFormReactiveComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: UserConfig,
            useFactory() {

                return new MyFavoriteClientUserConfig();

            }
        },
        UserStore
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
