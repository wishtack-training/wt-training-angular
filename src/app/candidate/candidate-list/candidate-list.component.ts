import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateStore } from '../candidate-store';

@Component({
    selector: 'wt-candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

    private _candidateStore = new CandidateStore();

    ngOnInit() {

        const candidate1 = new Candidate('Foo', 'BAR', [
            'Angular',
            'JavaScript'
        ]);

        const candidate2 = new Candidate('John', 'DOE', [
            'Angular',
            'JavaScript',
            'Python'
        ]);

        const candidate3 = new Candidate('Tony', 'STARK', [
            'Kite-surf',
            'Python'
        ]);

        this._candidateStore.addCandidate(candidate1);
        this._candidateStore.addCandidate(candidate2);
        this._candidateStore.addCandidate(candidate3);

    }

    addCandidate() {
        this._candidateStore.addCandidate(new Candidate('Foo', 'BAR', []));
    }

    getCandidateList() {
        return this._candidateStore.getCandidateList();
    }

    removeCandidate(candidate: Candidate) {
        this._candidateStore.removeCandidate(candidate);
    }

}
