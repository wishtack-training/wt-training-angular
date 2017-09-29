/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { Routes } from '@angular/router';
import { UserListViewComponent } from './user-list-view.component';
import { UserDetailViewComponent } from './user-detail-view.component';

export const USER_VIEWS_ROUTE_LIST: Routes = [
    {
        path: '',
        component: UserListViewComponent
    },
    {
        path: ':userId',
        component: UserDetailViewComponent
    }
];
