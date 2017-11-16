/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Route } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { LandingComponent } from './views/landing/landing/landing.component';
import { UserDetailViewComponent } from './views/user-view/user-detail-view.component';

export const APP_ROUTES: Route[] = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'users/:userId',
        component: UserDetailViewComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];