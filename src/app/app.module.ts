import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTE_LIST } from './app.routes';
import { UserListViewComponent } from './views/user-views/user-list-view.component';
import { UserViewsModule } from './views/user-views/user-views.module';
import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './views/landing/landing.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            APP_ROUTE_LIST,
            {
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
