import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MealListComponent } from '../../meal/meal-list/meal-list.component';
import { MealModule } from '../../meal/meal.module';
import { mealRouteResolver } from './meal-route-resolver';
import { MealDetailViewComponent } from './meal-detail-view/meal-detail-view.component';

export const mealRoutes: Routes = [
    {
        path: mealRouteResolver.LIST_PATH,
        component: MealListComponent
    },
    {
        /* detail/:mealId */
        path: `${mealRouteResolver.DETAIL_PATH}/:mealId`,
        component: MealDetailViewComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        MealModule,
        RouterModule.forChild(mealRoutes)
    ],
    declarations: [MealDetailViewComponent]
})
export class MealViewsModule {
}
