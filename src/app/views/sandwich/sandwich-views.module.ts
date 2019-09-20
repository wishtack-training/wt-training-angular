import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SandwichCardModule } from '../../sandwich-card/sandwich-card.component';
import { SandwichDetailViewComponent } from './sandwich-detail-view/sandwich-detail-view.component';

export const sandwichRoutes = [
  {
    path: ':sandwichId',
    component: SandwichDetailViewComponent
  }
];

@NgModule({
  declarations: [SandwichDetailViewComponent],
  imports: [RouterModule.forChild(sandwichRoutes), SandwichCardModule, CommonModule],
})
export class SandwichViewsModule {
}
