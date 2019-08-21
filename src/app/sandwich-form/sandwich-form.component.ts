import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sandwich } from '../cart/sandwich';

@Component({
    selector: 'wt-sandwich-form',
    templateUrl: './sandwich-form.component.html',
    styleUrls: ['./sandwich-form.component.scss']
})
export class SandwichFormComponent implements OnChanges, OnInit {

    @Input() buttonLabel: string;
    @Input() sandwich: Sandwich;
    @Output() sandwichSubmit = new EventEmitter<Sandwich>();

    sandwichForm = new FormGroup({
        title: new FormControl(null, [Validators.required]),
        price: new FormControl()
    });
    editedSandwich$: Observable<Sandwich>;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.sandwich) {
            this._updateForm(this.sandwich);
        }
    }

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

    private _updateForm(sandwich: Sandwich) {
        if (sandwich == null) {
            this.sandwichForm.reset();
            return;
        }

        this.sandwichForm.setValue(sandwich);
    }
}
