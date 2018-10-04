import { Injectable } from '@angular/core';

/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Meal } from './meal';

@Injectable({
    providedIn: 'root'
})
export class MealStore {

    private _mealList = [
        new Meal({name: 'Salad'}),
        new Meal({name: 'Ribs'})
    ];

    addMeal(meal: Meal) {
        this._mealList = [...this._mealList, meal];
    }

    getMealList() {
        return this._mealList;
    }

    removeMeal(meal: Meal) {
        this._mealList = this._mealList.filter(_meal => _meal !== meal);
    }

    replaceMeal(previousMeal: Meal, currentMeal: Meal) {
        this._mealList = this._mealList.map(_meal => {

            if (_meal === previousMeal) {
                return currentMeal;
            }

            return _meal;
        });
    }
}
