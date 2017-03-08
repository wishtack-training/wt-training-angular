/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */


import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';

export const ROUTES = [
    {
        path: '',
        component: UserListViewComponent
    },
    {
        path: ':userId',
        component: UserDetailViewComponent
    }
];

