import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../../../meal/meal';
import { MealStore } from '../../../meal/meal-store';
import { mealRouteResolver } from '../meal-route-resolver';

@Component({
    selector: 'wt-meal-detail-view',
    templateUrl: './meal-detail-view.component.html',
    styleUrls: ['./meal-detail-view.component.css']
})
export class MealDetailViewComponent implements OnInit {

    meal: Meal;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _mealStore: MealStore,
        private _router: Router
    ) {
    }

    ngOnInit() {
        const mealId = this._activatedRoute.snapshot.paramMap.get('mealId');
        this.meal = this._mealStore.getMeal(mealId);
    }

    updateMeal(meal: Meal) {
        this._mealStore.replaceMeal(this.meal, meal);
        this._router.navigate(mealRouteResolver.getMealListRoute());
    }

}
