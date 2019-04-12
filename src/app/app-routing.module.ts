import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateSearchComponent } from './candidate-search/candidate-search/candidate-search.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
    },
    {
        path: 'search',
        component: CandidateSearchComponent
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
