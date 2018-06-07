import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'wt-author-form',
    templateUrl: './author-form.component.html',
    styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

    @Input() authorFormGroup: FormGroup;

    constructor() {
    }

    static createFormGroup() {
        return new FormGroup({
            name: new FormControl(null, [
                Validators.required
            ])
        });
    }

    ngOnInit() {
    }

}
