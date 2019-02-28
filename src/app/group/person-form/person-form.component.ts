import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'wt-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

    personForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
    });

    ngOnInit() {
    }

    submitPerson() {
        console.log(this.personForm.value);
    }
}
