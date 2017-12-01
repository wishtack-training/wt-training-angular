/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { UserListHttpComponent } from './user/user-list-http/user-list-http.component';
import { Route } from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

export const APP_ROUTES: Route[] = [
    {
        path: 'users',
        component: UserListHttpComponent
    },
    {
        path: 'users/:userId',
        component: UserDetailComponent
    },
    {
        path: '**',
        redirectTo: 'users'
    },
    // {
    //     path: 'admin',
    //     loadChildren: './views/admin/admin.module#AdminModule'
    // }
];
