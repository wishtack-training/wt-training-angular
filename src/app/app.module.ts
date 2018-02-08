import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';

export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingViewComponent
    },
    {
        path: 'users',
        loadChildren: './views/user-views/user-views.module#UserViewsModule'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LandingViewComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
