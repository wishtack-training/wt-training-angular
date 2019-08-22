import { Routes } from '@angular/router';
import { helpRouteHelper } from './help/help-route-helper';
import { SandwichSearchComponent } from './sandwich-search/sandwich-search.component';


export const routes: Routes = [
    {
        path: 'search',
        component: SandwichSearchComponent
    },
    {
        path: helpRouteHelper.HELP_PATH,
        loadChildren: () => import('./help/help.module').then(m => m.HelpModule)
    },
    {
        path: '**',
        redirectTo: '/search'
    }
];

