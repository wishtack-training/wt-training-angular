import { Routes } from '@angular/router';
import { helpRouteHelper } from './help/help-route-helper';
import { HelpComponent } from './help/help.component';
import { SandwichSearchComponent } from './sandwich-search/sandwich-search.component';


export const routes: Routes = [
    {
        path: ':lang/search',
        children: [
            {
                path: '',
                component: SandwichSearchComponent
            },
            {
                path: 'help',
                children: [
                    {
                        path: '',
                        component: SandwichSearchComponent
                    },
                    {
                        path: '',
                        outlet: 'extra',
                        component: HelpComponent
                    }
                ]
            }
        ]
    },
    {
        path: helpRouteHelper.HELP_PATH,
        loadChildren: () => import('./help/help.module').then(m => m.HelpModule)
    },
    {
        path: '**',
        redirectTo: '/en/search/help'
    }
];
