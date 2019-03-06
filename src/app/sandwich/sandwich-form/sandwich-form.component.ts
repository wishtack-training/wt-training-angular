import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sandwich } from '../sandwich';

@Component({
    selector: 'wt-sandwich-form',
    templateUrl: './sandwich-form.component.html',
    styleUrls: ['./sandwich-form.component.css']
})
export class SandwichFormComponent {

    @Output() sandwichSubmit = new EventEmitter<Sandwich>();

    sandwichForm = new FormGroup({
        name: new FormControl(null, Validators.required),
    });

    onSubmit() {
        const sandwich = new Sandwich(this.sandwichForm.value);
        this.sandwichForm.reset();
        this.sandwichSubmit.emit(sandwich);
    }

}
