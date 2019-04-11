import { Skill } from './skill-form/skill';

export function createCandidate(candidateData: Partial<Candidate>) {

    const skillList = candidateData.skillList
        .map(skill => new Skill(skill));

    return new Candidate({
        ...candidateData,
        skillList
    });

}

export class Candidate {

    firstName: string;
    lastName: string;
    skillList: Skill[];

    constructor(args: Partial<Candidate>) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
        this.skillList = args.skillList || [];
    }

}
