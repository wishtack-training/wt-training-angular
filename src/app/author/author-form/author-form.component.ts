import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export function isNullOrEmpty(value: string) {

    if (value == null) {
        return true;
    }

    return value.length > 0;

}

export const isValidAuthorName: ValidatorFn = (control): null | {
    invalidAuthor?: {
        reason: string;
    }
} => {

    if (control.value == null) {
        return null;
    }

    if (control.value.toLowerCase().includes('younes')) {
        return {
            invalidAuthor: {
                reason: `"younes" is a forbidden author!`
            }
        };
    }

    return null;

};

export const any = (fieldList: string[]): ValidatorFn => (control) => {

    const value = fieldList
        .map(field => control.value[field])
        .find(_value => !isNullOrEmpty(_value));

    if (value === undefined) {
        return {
            any: true
        };
    }

    return null;

};

@Component({
    selector: 'wt-author-form',
    templateUrl: './author-form.component.html',
    styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent {

    @Input() authorFormGroup: FormGroup;

    static createAuthorFormGroup() {
        return new FormGroup({
            age: new FormControl(),
            birthYear: new FormControl(),
            name: new FormControl(null, [
                Validators.required,
                isValidAuthorName
            ])
        }, [
            any(['age', 'birthYear'])
        ]);
    }

}
