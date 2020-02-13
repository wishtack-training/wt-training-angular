import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookSearchComponent } from './book-search.component';

const routes: Routes = [
  {
    path: '',
    component: BookSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSearchRoutingModule {
}
