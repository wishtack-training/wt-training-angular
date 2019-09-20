import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SandwichDetailViewComponent } from './sandwich-detail-view/sandwich-detail-view.component';

export const sandwichRoutes = [
  {
    path: ':sandwichId',
    component: SandwichDetailViewComponent
  }
];

@NgModule({
  declarations: [SandwichDetailViewComponent],
  imports: [RouterModule.forChild(sandwichRoutes)],
})
export class SandwichViewsModule {
}
