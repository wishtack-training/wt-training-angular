import { Component } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateStore } from '../candidate-store';

@Component({
    selector: 'wt-candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent {

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

}
