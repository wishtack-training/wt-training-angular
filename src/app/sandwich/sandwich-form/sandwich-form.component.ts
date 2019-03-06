import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sandwich, SandwichConstraint } from '../sandwich';

console.log(SandwichConstraint);

@Component({
    selector: 'wt-sandwich-form',
    templateUrl: './sandwich-form.component.html',
    styleUrls: ['./sandwich-form.component.css']
})
export class SandwichFormComponent {

    @Output() sandwichSubmit = new EventEmitter<Sandwich>();

    constraintList = Object.values(SandwichConstraint);

    sandwichForm = new FormGroup({
        constraintList: new FormControl(),
        name: new FormControl(null, Validators.required),
    });

    onSubmit() {
        console.log(this.sandwichForm.value);
        const sandwich = new Sandwich(this.sandwichForm.value);
        this.sandwichForm.reset();
        this.sandwichSubmit.emit(sandwich);
    }

}
