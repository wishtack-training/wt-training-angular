import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandwichModule } from '../../sandwich/sandwich.module';
import { SandwichSearchViewComponent } from './sandwich-search-view.component';

export const routes: Routes = [
    {
        path: '',
        component: SandwichSearchViewComponent
    }
];

@NgModule({
    declarations: [
        SandwichSearchViewComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SandwichModule
    ]
})
export class SandwichSearchViewModule {
}
