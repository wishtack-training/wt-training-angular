import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

export enum Coolness {
    cool = 'cool',
    notCool = 'not-cool'
}

export interface CityInfo {
    coolness: Coolness;
    name: string;
}

export const postalCodeOrRegion: ValidatorFn = (control) => {

    if (!control.value.postalCode && !control.value.region) {
        return {
            postalCodeOrRegion: true
        };
    }

    return null;
};

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    Coolness = Coolness;

    cityInfoForm = new FormGroup({
        name: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        coolness: new FormControl(Coolness.cool),
        postalCode: new FormControl(),
        region: new FormControl()
    }, [
        postalCodeOrRegion
    ]);

    cityInfoList: CityInfo[] = [
        {name: 'Lyon ☀️', coolness: Coolness.cool},
        {name: 'Paris 🌧', coolness: Coolness.notCool},
        {name: 'Rennes', coolness: Coolness.cool}
    ];

    title = 'Welcome';

    ngOnInit() {

        this.cityInfoForm.get('name').valueChanges
            .pipe(
                filter(name => name != null),
                filter(name => name.toLowerCase().includes('paris'))
            )
            .subscribe(() => {

                this.cityInfoForm.patchValue({
                    coolness: Coolness.notCool,
                    postalCode: '75000',
                    region: 'Ile de France'
                });

            });

        // setInterval(() => this.title += '.', 200);
    }

    isResetEnabled() {
        return this.title.length > 20;
    }

    addCityInfo() {
        this.cityInfoList = [...this.cityInfoList, this.cityInfoForm.value];
        this.cityInfoForm.reset();
    }
}
