/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserStore } from './user-store';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        SharedModule
    ]
})
export class UserCoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UserCoreModule,
            providers: [
                UserStore
            ]
        };
    }

}
