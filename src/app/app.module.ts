import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
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
        DemoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UserModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
