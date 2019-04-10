export class Candidate {

    firstName: string;
    lastName: string;
    skillList: string[];

    constructor(args: Partial<Candidate>) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
        this.skillList = args.skillList || [];
    }

}
