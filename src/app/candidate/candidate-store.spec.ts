class Candidate {

    firstName: string;
    lastName: string;
    skillList: string[];

    constructor(firstName: string, lastName: string, skillList: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skillList = skillList;
    }

}

class CandidateStore {

    /**
     * @deprecated WIP.
     */
    getCandidateList(): Candidate[] {
        throw new Error('😱 Not implemented yet!');
    }

    /**
     * @deprecated WIP.
     */
    addCandidate(candidate: Candidate) {
        throw new Error('😱 Not implemented yet!');
    }

    /**
     * @deprecated WIP.
     */
    removeCandidate(candidate: Candidate) {
        throw new Error('😱 Not implemented yet!');
    }
}

describe('CandidateStore', () => {

    let candidateStore: CandidateStore;
    let candidate1: Candidate;
    let candidate2: Candidate;
    let candidate3: Candidate;


    beforeEach(() => {

        candidateStore = new CandidateStore();

        candidate1 = new Candidate('Foo', 'BAR', [
            'Angular',
            'JavaScript'
        ]);
        candidate2 = new Candidate('John', 'DOE', [
            'Angular',
            'JavaScript',
            'Python'
        ]);
        candidate3 = new Candidate('Tony', 'STARK', [
            'Kite-surf',
            'Python'
        ]);

    });

    xit('should add candidates', () => {

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

    xit('should remove candidates', () => {

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
