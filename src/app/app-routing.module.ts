import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './playground/demo/demo.component';
import { PlaygroundModule } from './playground/playground.module';

export const appRoutes: Routes = [
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: 'book',
        loadChildren: './views/book/book-views.module#BookViewsModule'
    },
    {
        path: '**',
        redirectTo: 'demo'
    }
];

@NgModule({
    imports: [
        CommonModule,
        PlaygroundModule,
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
