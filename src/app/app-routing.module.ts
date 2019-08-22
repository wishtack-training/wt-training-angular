import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { helpRouteHelper } from './help/help-route-helper';


const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: helpRouteHelper.HELP_PATH,
        loadChildren: () => import('./help/help.module').then(m => m.HelpModule)
    },
    {
        path: '**',
        redirectTo: '/demo'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
