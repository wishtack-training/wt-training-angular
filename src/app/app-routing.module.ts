import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandwichSearchComponent } from './sandwich-search/sandwich-search.component';

const routes: Routes = [
  {
    path: 'search',
    component: SandwichSearchComponent
  },
  {
    path: 'sandwich',
    loadChildren: () => import('./views/sandwich/sandwich-views.module')
      .then(m => m.SandwichViewsModule)
  },
  {
    path: '**',
    redirectTo: 'search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
