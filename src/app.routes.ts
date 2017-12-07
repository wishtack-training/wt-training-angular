/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Route } from '@angular/router';
import { LandingViewComponent } from './app/views/landing-view.component';
import { UserListViewComponent } from './app/views/users/user-list-view.component';
import { UserDetailViewComponent } from './app/views/users/user-detail-view.component';

export const APP_ROUTES: Route[] = [
    {
        path: 'welcome',
        component: LandingViewComponent
    },
    {
        path: 'users',
        component: UserListViewComponent
    },
    {
        path: 'users/:userId',
        component: UserDetailViewComponent
    },
    {
        path: 'admin',
        loadChildren: './views/admin/admin.module#AdminModule'
    }
];
