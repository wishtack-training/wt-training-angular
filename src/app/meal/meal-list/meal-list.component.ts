import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meal, MealType } from '../meal';
import { MealStore } from '../meal-store';

export function createNameControl() {
    return new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
    ]);
}

export const rangeValidator = (minValue: number, maxValue: number) => (control: AbstractControl) => {

    const value = control.value;

    if (value == null) {
        return null;
    }

    if (value < minValue) {
        return {
            rangeInvalid: {
                expectedMinValue: minValue,
                value
            }
        };
    }

    if (value > maxValue) {
        return {
            rangeInvalid: {
                expectedMaxValue: maxValue,
                value
            }
        };
    }

    return null;

};

@Component({
    selector: 'wt-meal-list',
    templateUrl: './meal-list.component.html',
    styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

    mealForm = new FormGroup({
        name: createNameControl(),
        price: new FormControl(null, [
            rangeValidator(5, 10)
        ]),
        type: new FormControl(null)
    }, [
        (control) => {

            if (control.value.type === MealType.desert && control.value.price > 6) {
                return {
                    wtf: true
                };
            }

            return null;

        }
    ]);

    private _mealStore = new MealStore();

    ngOnInit() {
    }

    addMeal() {
        const meal = new Meal(this.mealForm.value);
        this._mealStore.addMeal(meal);
        this.mealForm.reset();
    }

    getMealList() {
        return this._mealStore.getMealList();
    }

    removeMeal(meal: Meal) {
        this._mealStore.removeMeal(meal);
    }

}
