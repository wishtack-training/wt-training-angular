import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../person';

@Component({
    selector: 'wt-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

    @Output() personSubmit = new EventEmitter<Person>();

    personForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        foodConstraintList: new FormControl(),
        // foodConstraints: new FormGroup({
        //     glutenIntolerant: new FormControl(),
        //     vegan: new FormControl()
        // })
    });

    ngOnInit() {

        // this.personForm.get('firstName').valueChanges
        //     .subscribe(firstName => {
        //
        //         if (this.personForm.get('lastName') != null) {
        //             return;
        //         }
        //
        //         if (firstName != null && firstName.length > 0) {
        //             this.personForm.addControl('lastName', new FormControl(null, [
        //                 Validators.required
        //             ]));
        //         }
        //     });


    }

    submitPerson() {
        this.personSubmit.emit(new Person(this.personForm.value));
        this.personForm.reset();
    }

}
