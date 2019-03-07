import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandwichGalleryComponent } from './sandwich/sandwich-gallery/sandwich-gallery.component';
import { SandwichSearchViewComponent } from './views/sandwich-search-view/sandwich-search-view.component';

const routes: Routes = [
    {
        path: 'search',
        component: SandwichSearchViewComponent
    },
    {
        path: 'gallery',
        component: SandwichGalleryComponent
    },
    {
        path: '**',
        redirectTo: 'search'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
