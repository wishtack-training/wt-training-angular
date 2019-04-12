import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { Candidate } from '../candidate';
import { CandidateCardModule } from '../candidate-card/candidate-card.component';
import { CandidateFormModule } from '../candidate-form/candidate-form.component';
import { CandidateStore } from '../candidate-store';

@Component({
    selector: 'wt-candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent {

    editedCandidate: Candidate;

    private _candidateStore = new CandidateStore();

    addCandidate(candidate: Candidate) {
        this._candidateStore.addCandidate(candidate);
    }

    getCandidateList() {
        return this._candidateStore.getCandidateList();
    }

    removeCandidate(candidate: Candidate) {
        this._candidateStore.removeCandidate(candidate);
    }

    editCandidate(candidate: Candidate) {
        this.editedCandidate = candidate;
    }

    updateCandidate(candidate: Candidate) {

        this._candidateStore.replaceCandidate({
            previous: this.editedCandidate,
            current: candidate
        });

        this.editedCandidate = undefined;

    }

}

@NgModule({
    declarations: [CandidateListComponent],
    exports: [CandidateListComponent],
    imports: [
        CommonModule,
        CandidateCardModule,
        CandidateFormModule,
        MatButtonModule
    ]
})
export class CandidateListModule {
}
