import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CandidateSearchComponent } from './candidate-search/candidate-search/candidate-search.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'search',
        component: CandidateSearchComponent
    },
    {
        path: 'candidates',
        loadChildren: './views/candidate-list-view/candidate-list-view.component#CandidateListViewModule',

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
