import { Skill } from './skill-form/skill';

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
