/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Route } from '@angular/router';
import { HelpViewComponent } from './views/help-view/help-view.component';

export const ROUTES: Route[] = [
    {
        path: 'help/:helpId',
        component: HelpViewComponent
    },
    {
        path: 'users',
        loadChildren: './views/users/users-views.module#UserViewsModule'
    },
    {
        path: '**',
        redirectTo: 'help/test'
    }
];

