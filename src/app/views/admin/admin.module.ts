/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'wt-admin',
    template: `<div>ADMIN</div>`
})
export class AdminComponent {

}

@NgModule({
    declarations: [
        AdminComponent
    ],
    exports: [],
    imports: [
        RouterModule.forChild([
            {
                path: 'phpmyadmin',
                component: AdminComponent
            },
            {
                path: '**',
                redirectTo: './phpmyadmin'
            }
        ]),
        SharedModule
    ]
})
export class AdminModule {
}
