import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'wt-form-demo',
    templateUrl: './form-demo.component.html',
    styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {

    @Output() citySubmit = new EventEmitter<string>();

    cityForm = new FormGroup({
        name: new FormControl()
    });

    ngOnInit() {

        // this.cityForm.valueChanges
        //     .pipe(
        //         debounceTime(100)
        //     )
        //     .subscribe((data) => {
        //         console.log(data);
        //     });

    }

    onCitySubmit() {

        const city = this.cityForm.value.name;

        this.citySubmit.emit(city);

        this.cityForm.reset();

    }

}
