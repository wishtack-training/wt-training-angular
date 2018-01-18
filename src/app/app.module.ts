import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingComponent } from './views/landing.component';

export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingComponent
    },
    {
        path: 'users',
        loadChildren: './views/user-views/user-views.module#UserViewsModule'
    },
    {
        path: '**',
        redirectTo: 'users'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
