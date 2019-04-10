export class Skill {

    name: string;
    level: number;

    constructor(args: Partial<Skill> = {}) {
        this.name = args.name;
        this.level = args.level;
    }

}
