import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

export class UserFormConfig {
    buttonLabel = 'SUBMIT';
    validationEnabled?: boolean;
    checkBlabla?: boolean;
    formType?: string;
}

@Component({
    template: '<div>Cocorico</div>'
})
export class FrenchArmyForm {

}

@Component({
    template: '<div>USA</div>'
})
export class USArmyForm {

}


@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {

    @Input() formConfig = new UserFormConfig();
    @Output() onUserSubmit = new EventEmitter<User>();

    formComponent = FrenchArmyForm;
    userForm: FormGroup;

    constructor() {

        this.userForm = new FormGroup({
            firstName: new FormControl(null, [
                Validators.required
            ]),
            lastName: new FormControl()
        });

        // setInterval(() => {
        //
        //     if (this.formComponent === USArmyForm) {
        //         this.formComponent = FrenchArmyForm;
        //     }
        //     else {
        //         this.formComponent = USArmyForm;
        //     }
        //
        // }, 1000);

    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    addUser() {
        const user = new User(this.userForm.value);
        this.onUserSubmit.emit(user);
        this.userForm.reset();
    }

}
