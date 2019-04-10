export class Candidate {

    firstName: string;
    lastName: string;
    skillList: string[];

    constructor(firstName?: string, lastName?: string, skillList: string[] = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skillList = skillList;
    }

}
