import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRouteHelper } from './app-route-helper';
import { DemoComponent } from './demo/demo.component';
import { HelpComponent } from './help/help.component';


const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: `${appRouteHelper.HELP_PATH}/:topic`,
        component: HelpComponent
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
