import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface CityInfo {
    city: string;
    temperature: number;
}

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    @Output() cityInfoSubmit = new EventEmitter<CityInfo>();

    cityInfoForm = new FormGroup({
        city: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        temperature: new FormControl()
        // geolocation: new FormGroup({
        //     latitude: new FormControl(),
        //     longitude: new FormControl()
        // })
    });

    name = 'Foo';
    cityList = [
        'Luxembourg',
        'Lyon'
    ];

    ngOnInit() {
        // setInterval(() => this.name += '.', 1000);

        this.cityInfoForm.valueChanges
            .subscribe(value => {
                console.log(value);
            });
    }

    reset() {
        this.name = 'Foo';
    }

    submit() {
        this.cityInfoSubmit.emit(this.cityInfoForm.value);
    }
}
