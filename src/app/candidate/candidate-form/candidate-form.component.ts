import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { resetForm } from '../../helpers/reset-form';
import { Candidate } from '../candidate';

@Component({
    selector: 'wt-candidate-form',
    templateUrl: './candidate-form.component.html',
    styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit {

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
                this._createSkillFormGroup()
            ])
        });
    }

    get skillListFormArray() {
        return this.candidateForm.get('skillList') as FormArray;
    }

    ngOnInit() {
        this.candidateForm.valueChanges.subscribe(value => console.log(value));
    }

    addSkill() {
        this.skillListFormArray.push(this._createSkillFormGroup());
    }

    submitCandidate() {

        const candidate = new Candidate(this.candidateForm.value);

        this.candidateSubmit.emit(candidate);

        resetForm(this.candidateForm);

        this.candidateForm.setControl('skillList', new FormArray([
            this._createSkillFormGroup()
        ]));

    }

    private _createSkillFormGroup() {
        return new FormGroup({
            name: new FormControl(null, [
                Validators.required
            ]),
            level: new FormControl(null, [
                Validators.min(0),
                Validators.max(5)
            ])
        });
    }

}
