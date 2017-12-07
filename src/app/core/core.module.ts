/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';

import { UserCoreModule } from '../user-core/user-core.module';

@NgModule({
    imports: [
        UserCoreModule.forRoot()
    ]
})
export class CoreModule {
}
