/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { Route } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';

export const APP_ROUTE_LIST: Route[] = [
    {
        path: '',
        component: LandingComponent
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
