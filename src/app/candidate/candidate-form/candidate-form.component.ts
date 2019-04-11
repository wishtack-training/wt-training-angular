import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { resetForm } from '../../helpers/reset-form';
import { Candidate, createCandidate } from '../candidate';
import { SkillFormComponent } from '../skill-form/skill-form.component';

@Component({
    selector: 'wt-candidate-form',
    templateUrl: './candidate-form.component.html',
    styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent {

    /**
     * 1. @Input
     * 2. @Output
     * 3. Public properties.
     * 4. Private properties.
     * 5. constructor.
     * 6. Lifecycle hooks: ngOn*
     */

    @Output() candidateSubmit = new EventEmitter<Candidate>();

    candidateForm: FormGroup;

    constructor() {
        this.candidateForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            skillList: new FormArray([
                SkillFormComponent.createSkillFormGroup()
            ])
        });
    }

    get skillListFormArray() {
        return this.candidateForm.get('skillList') as FormArray;
    }

    addSkill() {
        this.skillListFormArray.push(SkillFormComponent.createSkillFormGroup());
    }

    submitCandidate() {

        const candidate = createCandidate(this.candidateForm.value);

        this.candidateSubmit.emit(candidate);

        resetForm(this.candidateForm);

        this.candidateForm.setControl('skillList', new FormArray([
            SkillFormComponent.createSkillFormGroup()
        ]));

    }

}
