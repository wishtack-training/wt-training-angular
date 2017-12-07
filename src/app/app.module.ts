import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignatureComponent } from './signature/signature.component';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { APP_ROUTES } from '../app.routes';
import { LandingViewComponent } from './views/landing-view.component';
import { UserListViewComponent } from './views/users/user-list-view.component';
import { UserDetailViewComponent } from './views/users/user-detail-view.component';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        LandingViewComponent,
        SignatureComponent,
        UserDetailViewComponent,
        UserListViewComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        RouterModule.forRoot(APP_ROUTES, {
            preloadingStrategy: PreloadAllModules
        }),
        UserModule
    ]
})
export class AppModule {
}
