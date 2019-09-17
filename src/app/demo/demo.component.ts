import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { CityInfo } from '../city-info-preview/city-info';
import { Coolness } from '../city-info-preview/coolness.enum';

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
    private voteCount = 0;

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

    handleVote(cityInfo: CityInfo, coolness: Coolness) {

        this.cityInfoList = this.cityInfoList
            .map(_cityInfo => {

                if (_cityInfo === cityInfo) {

                    return {
                        ...cityInfo,
                        coolness
                    };
                }

                return _cityInfo;
            });

    }
}
