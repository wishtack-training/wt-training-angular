/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './playground/demo/demo.component';
import { ObservablePlaygroundComponent } from './playground/observable-playground/observable-playground.component';

export const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: 'observables',
        component: ObservablePlaygroundComponent
    },
    {
        path: '**',
        redirectTo: '/demo'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
