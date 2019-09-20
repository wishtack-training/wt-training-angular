import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandwichSearchComponent } from './sandwich-search/sandwich-search.component';


const routes: Routes = [
  {
    path: 'search',
    component: SandwichSearchComponent
  },
  {
    path: '**',
    redirectTo: 'search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
