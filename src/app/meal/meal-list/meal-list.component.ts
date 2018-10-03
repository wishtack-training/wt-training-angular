import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meal } from '../meal';
import { MealStore } from '../meal-store';

@Component({
    selector: 'wt-meal-list',
    templateUrl: './meal-list.component.html',
    styleUrls: ['./meal-list.component.css']
})
export class MealListComponent {

    mealForm = new FormGroup({
        name: new FormControl(),
        price: new FormControl(),
        type: new FormControl()
    });

    private _mealStore = new MealStore();

    addMeal() {
        const meal = new Meal(this.mealForm.value);
        this._mealStore.addMeal(meal);
    }

    getMealList() {
        return this._mealStore.getMealList();
    }

    removeMeal(meal: Meal) {
        this._mealStore.removeMeal(meal);
    }

}
