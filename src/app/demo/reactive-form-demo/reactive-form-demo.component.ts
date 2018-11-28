import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'wt-reactive-form-demo',
    templateUrl: './reactive-form-demo.component.html',
    styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent {

    userForm = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        lastName: new FormControl(),
        address: new FormGroup({
            city: new FormControl(),
            street: new FormControl()
        })
    });

    constructor() {
        this.userForm.valueChanges.subscribe(value => {
            console.log(value);
        });
    }

    submit() {
        this.userForm.reset();
        console.log(this.userForm.valid);
        console.log(this.userForm.value);
    }
}
