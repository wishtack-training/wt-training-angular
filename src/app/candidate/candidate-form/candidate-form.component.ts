import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { resetForm } from '../../helpers/reset-form';
import { Candidate } from '../candidate';
import { Skill } from '../skill-form/skill';

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

    candidateForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
    });
    skillList: Skill[] = [];

    submitCandidate() {

        const candidate = new Candidate({
            ...this.candidateForm.value,
            skillList: this.skillList
        });

        this.candidateSubmit.emit(candidate);

        resetForm(this.candidateForm);
        this.skillList = [];

    }

    addSkill(skill: Skill) {
        this.skillList = [...this.skillList, skill];
    }

}
