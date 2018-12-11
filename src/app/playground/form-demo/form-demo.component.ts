import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'wt-form-demo',
    templateUrl: './form-demo.component.html',
    styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent {

    userForm = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        lastName: new FormControl(),
        address: new FormGroup({
            city: new FormControl(),
            postalCode: new FormControl()
        })
    });

    constructor() {
        /* @hack should be in ngOnInit */
        this.userForm.valueChanges
            .subscribe(data => {
                console.log(data);
            });
    }

    submit() {
        console.log(this.userForm.value);
    }

}
