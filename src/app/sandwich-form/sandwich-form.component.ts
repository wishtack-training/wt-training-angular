import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sandwich } from '../cart/sandwich';

@Component({
    selector: 'wt-sandwich-form',
    templateUrl: './sandwich-form.component.html',
    styleUrls: ['./sandwich-form.component.scss']
})
export class SandwichFormComponent implements OnInit {

    @Output() sandwichSubmit = new EventEmitter<Sandwich>();

    sandwichForm = new FormGroup({
        title: new FormControl(null, [Validators.required]),
        price: new FormControl()
    });
    editedSandwich$: Observable<Sandwich>;

    ngOnInit() {
        this.editedSandwich$ = this.sandwichForm.valueChanges
            .pipe(
                map(value => new Sandwich(value))
            );
    }

    submit() {
        const sandwich = new Sandwich(this.sandwichForm.value);
        this.sandwichSubmit.emit(sandwich);
        this.sandwichForm.reset();
    }

}
