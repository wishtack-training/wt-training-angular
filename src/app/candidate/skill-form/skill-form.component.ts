import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export class Skill {

    name: string;
    level: number;

    constructor(args: Partial<Skill> = {}) {
        this.name = args.name;
        this.level = args.level;
    }

}

@Component({
    selector: 'wt-skill-form',
    templateUrl: './skill-form.component.html',
    styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent {

    nameControl = new FormControl(null, [
        Validators.required
    ]);
    levelControl = new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(5)
    ]);
    skillForm: FormGroup;

    constructor() {
        this.skillForm = new FormGroup({
            name: this.nameControl,
            level: this.levelControl
        });
    }

    submitSkill() {
        const skill = new Skill(this.skillForm.value);
        this.skillForm.reset();
    }

}
