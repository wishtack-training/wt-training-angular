import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Sandwich, SandwichConstraint } from '../sandwich';

export const sandwichConstraintsValidator: ValidatorFn = (control) => {

    if (control.value == null) {
        return null;
    }

    if (control.value.includes(SandwichConstraint.Vegan)
        && control.value.includes(SandwichConstraint.Vegetarian)) {
        return {
            sandwichConstraints: {
                value: control.value,
                message: 'Tu exagères!'
            }
        };
    }

    return null;
};

@Component({
    selector: 'wt-sandwich-form',
    templateUrl: './sandwich-form.component.html',
    styleUrls: ['./sandwich-form.component.css']
})
export class SandwichFormComponent {

    @Output() sandwichSubmit = new EventEmitter<Sandwich>();

    constraintList = Object.values(SandwichConstraint);

    sandwichForm = new FormGroup({
        constraintList: new FormControl(null, sandwichConstraintsValidator),
        name: new FormControl(null, Validators.required),
    });

    onSubmit() {
        const sandwich = new Sandwich(this.sandwichForm.value);
        this.sandwichForm.reset();
        this.sandwichSubmit.emit(sandwich);
    }

}
