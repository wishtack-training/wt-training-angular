import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CandidateListModule } from '../../candidate/candidate-list/candidate-list.component';

@Component({
    selector: 'wt-candidate-list-view',
    templateUrl: './candidate-list-view.component.html',
    styleUrls: ['./candidate-list-view.component.css']
})
export class CandidateListViewComponent {

    constructor(private _activatedRoute: ActivatedRoute) {
        console.log(this._activatedRoute.snapshot.queryParams);
    }

}

@NgModule({
    declarations: [CandidateListViewComponent],
    exports: [CandidateListViewComponent],
    imports: [
        CandidateListModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CandidateListViewComponent
            }
        ])
    ]
})
export class CandidateListViewModule {
}
