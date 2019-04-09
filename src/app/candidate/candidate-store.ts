import { Candidate } from './candidate';

export class CandidateStore {

    private _candidateList: Candidate[] = [];

    getCandidateList() {
        return this._candidateList;
    }

    addCandidate(candidate: Candidate) {
        this._candidateList = [...this._candidateList, candidate];
    }

    removeCandidate(candidate: Candidate) {
        this._candidateList = this._candidateList
            .filter(_candidate => _candidate !== candidate);
    }

}
