import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Sandwich } from '../cart/sandwich';

@Component({
  selector: 'wt-sandwich-form',
  templateUrl: './sandwich-form.component.html',
  styleUrls: ['./sandwich-form.component.scss']
})
export class SandwichFormComponent {

  @Output() sandwichSubmit = new EventEmitter<Sandwich>();

  sandwichForm = new FormGroup({
    title: new FormControl(),
    price: new FormControl()
  });

  submitSandwich() {
    const sandwich = new Sandwich(this.sandwichForm.value);
    this.sandwichSubmit.emit(sandwich);
  }

}
