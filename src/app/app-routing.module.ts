/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './landing/landing/landing.component';

export const routes: Routes = [
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'users',
        loadChildren: './views/user-routing/user-routing.module#UserRoutingModule'
    },
    {
        path: '**',
        redirectTo: 'landing'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        }),
        SharedModule
    ]
})
export class AppRoutingModule {

}
