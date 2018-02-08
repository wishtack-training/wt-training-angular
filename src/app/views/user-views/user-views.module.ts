import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { Route, RouterModule } from '@angular/router';
import { UserModule } from '../../user/user.module';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';
import { SharedModule } from '../../shared.module';

export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: UserListViewComponent
    },
    {
        path: ':userId',
        component: UserDetailViewComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        UserModule
    ],
    declarations: [
        UserDetailViewComponent,
        UserListViewComponent
    ],
    exports: [
        UserDetailViewComponent,
        UserListViewComponent,
    ]
})
export class UserViewsModule {
}
