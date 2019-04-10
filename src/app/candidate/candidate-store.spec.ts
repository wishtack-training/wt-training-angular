import { Candidate } from './candidate';
import { CandidateStore } from './candidate-store';

describe('CandidateStore', () => {

    let candidateStore: CandidateStore;
    let candidate1: Candidate;
    let candidate2: Candidate;
    let candidate3: Candidate;


    beforeEach(() => {

        candidateStore = new CandidateStore();

        candidate1 = new Candidate({
            firstName: 'Foo', lastName: 'BAR', skillList: [
                'Angular',
                'JavaScript'
            ]
        });
        candidate2 = new Candidate({
            firstName: 'John', lastName: 'DOE', skillList: [
                'Angular',
                'JavaScript',
                'Python'
            ]
        });
        candidate3 = new Candidate({
            firstName: 'Tony', lastName: 'STARK', skillList: [
                'Kite-surf',
                'Python'
            ]
        });

    });

    it('should add candidates', () => {

        const emptyCandidateList = candidateStore.getCandidateList();

        candidateStore.addCandidate(candidate1);
        candidateStore.addCandidate(candidate2);
        candidateStore.addCandidate(candidate3);

        /* Making sure that `emptyCandidateList` is not messed with. */
        expect(emptyCandidateList.length).toEqual(0);

        expect(candidateStore.getCandidateList()).toEqual([
            candidate1,
            candidate2,
            candidate3
        ]);

    });

    it('should remove candidates', () => {

        candidateStore.addCandidate(candidate1);
        candidateStore.addCandidate(candidate2);
        candidateStore.addCandidate(candidate3);

        candidateStore.removeCandidate(candidate2);

        expect(candidateStore.getCandidateList()).toEqual([
            candidate1,
            candidate3
        ]);

    });

    xit('should update candidate', () => {
        throw new Error('😱 Not implemented yet!');
    });

    xit('should filter candidates', () => {
        throw new Error('😱 Not implemented yet!');
    });

});
