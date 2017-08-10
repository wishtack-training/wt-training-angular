/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Session } from './session';

@NgModule({
    declarations: SessionModule.COMPONENT_LIST,
    exports: SessionModule.COMPONENT_LIST,
    imports: [
        SharedModule
    ]
})
export class SessionModule {

    static COMPONENT_LIST = [];

    static forRoot(): ModuleWithProviders {

        return {
            ngModule: SessionModule,
            providers: [
                Session
            ]
        };

    }

}
