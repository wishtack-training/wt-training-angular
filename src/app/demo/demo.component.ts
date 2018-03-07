import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

    userName = 'Foo';
    address;
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

        this.addressFormGroup.valueChanges
            .debounceTime(500)
            .subscribe(value => {
                this.address = value;
            });

    }

    canReset() {
        return this.userName.length > 5;
    }

    reset() {
        this.userName = '';
    }

    submitAddress() {
        this.address = this.addressFormGroup.value;
    }
}
