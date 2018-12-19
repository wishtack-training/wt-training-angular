import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    cityList = [
        'Luxembourg',
        'Lyon'
    ];

    title = 'training';
    cityForm = new FormGroup({
        city: new FormControl(),
        score: new FormControl()
    });

    ngOnInit() {

        this.cityForm.valueChanges.subscribe(console.log);

        setInterval(() => this.title += '.', 1000);

    }

    getPictureUri() {
        const title = encodeURIComponent(this.title);
        return `https://robohash.org/${title}?set=set4`;
    }

    canReset() {
        return this.title.length > 10;
    }

    reset() {
        this.title = '';
    }

    onCityVote(city: string, vote: number) {
        console.log(city, vote);
    }

    submit() {
        console.log(this.cityForm.value);
        this.cityForm.reset();
    }
}
