import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'wt-form-demo',
    templateUrl: './form-demo.component.html',
    styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {

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

    onBookSubmit() {
        console.log(this.cityForm.value);
        this.cityForm.reset();
    }

}
