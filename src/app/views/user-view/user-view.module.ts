/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { UserModule } from '../../user/user.module';
import { SharedModule } from '../../shared/shared.module';
import { UserDetailViewComponent } from './user-detail-view.component';

@NgModule({
    declarations: [
        UserDetailViewComponent
    ],
    exports: [
        UserDetailViewComponent,
        UserModule
    ],
    imports: [
        SharedModule,
        UserModule.forRoot()
    ]
})
export class UserViewModule {

}

