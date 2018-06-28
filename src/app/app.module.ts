import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CitySelectorComponent } from './city/city-selector/city-selector.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list-container/user-list.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { UserModule } from './user/user.module';

export const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'users/:userId',
        component: UserDetailComponent
    },
    {
        path: 'search',
        component: UserSearchComponent
    },
    {
        path: '**',
        redirectTo: 'users'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        CitySelectorComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        UserModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
