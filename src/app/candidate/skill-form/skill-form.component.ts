import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { resetForm } from '../../helpers/reset-form';
import { Skill } from './skill';

@Component({
    selector: 'wt-skill-form',
    templateUrl: './skill-form.component.html',
    styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent {

    @Output() skillSubmit = new EventEmitter<Skill>();

    skillForm: FormGroup;

    constructor() {
        this.skillForm = new FormGroup({
            name: new FormControl(null, [
                Validators.required
            ]),
            level: new FormControl(null, [
                Validators.required,
                Validators.min(0),
                Validators.max(5)
            ])
        });
    }

    get nameControl() {
        return this.skillForm.get('name');
    }

    submitSkill() {

        const skill = new Skill(this.skillForm.value);
        resetForm(this.skillForm);
        this.skillSubmit.emit(skill);

    }

}
