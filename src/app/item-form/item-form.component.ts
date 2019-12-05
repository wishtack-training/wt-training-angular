import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { createItem, Item } from '../cart/item';

export const forbidden: ValidatorFn = (control) => {

  if (control.value == null) {
    return null;
  }

  const forbiddenWords = ['windows'];
  const isForbidden = forbiddenWords.includes(control.value.toLowerCase().trim());

  return isForbidden ? {
    forbidden: {
      value: control.value,
      forbiddenWords
    }
  } : null;
};

export const or: (controlNameList: string[]) => ValidatorFn = (controlNameList) => (control) => {

  const isValid = controlNameList.some(name => control.value[name]);

  return isValid ? null : {
    or: {
      requiredFields: controlNameList
    }
  };
};


@Component({
  selector: 'as-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  @Output() itemSubmit = new EventEmitter<Item>();

  itemFormGroup = new FormGroup({
    title: new FormControl(null, [
      Validators.maxLength(12),
      forbidden
    ]),
    isbn: new FormControl(),
    price: new FormControl(null, [
      Validators.min(0)
    ])
  }, [
    or(['title', 'isbn'])
  ]);

  constructor() {
  }

  ngOnInit() {
  }

  submitItem() {
    const item = createItem(this.itemFormGroup.value);
    this.itemSubmit.emit(item);
    this.itemFormGroup.reset();
  }

  /**
   * Just a demo to collect errors.
   * @todo make it recursive.
   */
  getAllErrors() {

    const controlEntryList = Object.entries(this.itemFormGroup.controls);
    const controlErrors = controlEntryList
      .filter(([_, control]) => !control.valid)
      .map(([name, control]) => ({name, errors: control.errors}))
    const errorDict = controlErrors.reduce((acc, {name, errors}) => ({
      ...acc,
      [name]: errors
    }), {});

    return errorDict;

  }

}
