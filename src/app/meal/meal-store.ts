/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Meal } from './meal';

export class MealStore {

    private _mealList = [
        new Meal(),
        new Meal()
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
}
