/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { UserRepository } from './user-repository';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        SharedModule
    ],
    providers: [
        UserRepository
    ]
})
export class UserModule {

}
