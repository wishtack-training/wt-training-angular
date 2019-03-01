import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupEditorComponent } from './group/group-editor/group-editor.component';
import { RestaurantSearchComponent } from './restaurant/restaurant-search/restaurant-search.component';

const routes: Routes = [
    {
        path: 'group',
        component: GroupEditorComponent
    },
    {
        path: 'restaurants',
        component: RestaurantSearchComponent
    },
    {
        path: '**',
        redirectTo: 'restaurants'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
