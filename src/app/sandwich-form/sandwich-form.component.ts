import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sandwich } from '../cart/sandwich';

@Component({
  selector: 'wt-sandwich-form',
  templateUrl: './sandwich-form.component.html',
  styleUrls: ['./sandwich-form.component.scss']
})
export class SandwichFormComponent implements OnChanges {

  @Input() sandwich: Sandwich;
  @Output() sandwichSubmit = new EventEmitter<Sandwich>();

  sandwichForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required
    ]),
    price: new FormControl()
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sandwich) {
      this.sandwichForm.reset(this.sandwich);
    }
  }

  submitSandwich() {
    const sandwich = new Sandwich(this.sandwichForm.value);
    this.sandwichSubmit.emit(sandwich);
    this.sandwichForm.reset();
  }

}
