import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MoreButtonModule } from '../../lib/more-button/more-button.module';
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
        MoreButtonModule,
        ReactiveFormsModule
    ]
})
export class MealModule {
}
