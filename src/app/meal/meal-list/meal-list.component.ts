import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { ButtonShape } from '../../../lib/more-button/more-button/more-button.component';
import { Meal } from '../meal';
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

    buttonShapeEnum = ButtonShape;
    selectedMeal: Meal;

    constructor(
        private _mealStore: MealStore
    ) {
    }

    ngOnInit() {
    }

    addMeal(meal: Meal) {
        this._mealStore.addMeal(meal);
    }

    getMealList() {
        return this._mealStore.getMealList();
    }

    removeMeal(meal: Meal) {
        this._mealStore.removeMeal(meal);
    }

    selectMeal(meal: Meal) {
        this.selectedMeal = meal;
    }

    updateMeal(meal: Meal) {
        this._mealStore.replaceMeal(this.selectedMeal, meal);
        this.selectedMeal = null;
    }

}
