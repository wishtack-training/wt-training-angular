import { Component } from '@angular/core';
import { Candidate } from '../candidate';
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
