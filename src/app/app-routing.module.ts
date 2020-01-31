import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search/book-search.component';

export const routes: Routes = [
  {
    path: 'search',
    component: BookSearchComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    redirectTo: '/search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
