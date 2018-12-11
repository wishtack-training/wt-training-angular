import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export class User {
    constructor(
        public firstName: string,
        public lastName: string
    ) {
    }
}

@Component({
    selector: 'wt-form-demo',
    templateUrl: './form-demo.component.html',
    styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent {

    @Input() buttonLabel = 'SUBMIT';
    @Output() userChange = new EventEmitter<User>();
    @Output() userSubmit = new EventEmitter<User>();

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
                // this.userChange.emit(...)
            });
    }

    submit() {

        /* @todo create a instance of a user. */
        const userData = this.userForm.value;

        const user = new User(
            userData.firstName,
            userData.lastName
        );

        this.userSubmit.emit(user);

    }

}
