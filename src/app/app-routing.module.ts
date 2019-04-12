import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateSearchComponent } from './candidate-search/candidate-search/candidate-search.component';
import { CandidateListComponent } from './candidate/candidate-list/candidate-list.component';
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
        component: CandidateListComponent
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
