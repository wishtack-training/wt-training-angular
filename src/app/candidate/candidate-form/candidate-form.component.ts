import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { resetForm } from '../../helpers/reset-form';
import { Candidate, createCandidate } from '../candidate';
import { SkillFormComponent, SkillFormModule } from '../skill-form/skill-form.component';

@Component({
    selector: 'wt-candidate-form',
    templateUrl: './candidate-form.component.html',
    styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnChanges, OnInit {

    /**
     * 1. @Input
     * 2. @Output
     * 3. Public properties.
     * 4. Private properties.
     * 5. constructor.
     * 6. Lifecycle hooks: ngOn*
     */

    @Input() buttonLabel = 'SUBMIT';
    @Input() candidate: Candidate;

    @Output() candidateSubmit = new EventEmitter<Candidate>();

    candidateForm: FormGroup;

    constructor() {
        this.candidateForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            skillList: new FormArray([])
        });
    }

    get skillListFormArray() {
        return this.candidateForm.get('skillList') as FormArray;
    }

    ngOnChanges(changes: SimpleChanges) {
        console.group('changes');
        console.log(changes);
        console.groupEnd();

        if (changes.candidate) {
            this._resetForm(this.candidate);
        }

    }

    private _resetForm(candidate: Candidate) {
        const skillListFormGroupList = candidate.skillList
            .map(() => SkillFormComponent.createSkillFormGroup());
        const skillListFormArray = new FormArray(skillListFormGroupList);
        this.candidateForm.setControl('skillList', skillListFormArray);
        this.candidateForm.reset(candidate);
    }

    ngOnInit() {
        console.group('init');
        console.log(this.candidate);
        console.log(this.buttonLabel);
        console.groupEnd();
    }

    addSkill() {
        this.skillListFormArray.push(SkillFormComponent.createSkillFormGroup());
    }

    submitCandidate() {

        const candidate = createCandidate(this.candidateForm.value);

        this.candidateSubmit.emit(candidate);

        resetForm(this.candidateForm);

        this.candidateForm.setControl('skillList', new FormArray([]));

    }

}

@NgModule({
    declarations: [CandidateFormComponent],
    exports: [CandidateFormComponent],
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        SkillFormModule,
        CommonModule
    ]
})
export class CandidateFormModule {
}
