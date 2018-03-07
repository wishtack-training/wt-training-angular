import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

    userName = 'Foo';
    addressFormGroup: FormGroup;

    constructor() {
        this.addressFormGroup = new FormGroup({
            street: new FormControl(
                null, [
                    Validators.required,
                    Validators.minLength(3)
                ]),
            city: new FormControl()
        });
    }

    ngOnInit() {

        setInterval(() => this.userName += '.', 500);

    }

    canReset() {
        return this.userName.length > 5;
    }

    reset() {
        this.userName = '';
    }

    submitAddress() {
        console.log(this.addressFormGroup.value);
        this.addressFormGroup.reset();
    }
}
