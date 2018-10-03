import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MealListComponent } from './meal-list/meal-list.component';

@NgModule({
    declarations: [
        MealListComponent
    ],
    exports: [
        MealListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class MealModule {
}
