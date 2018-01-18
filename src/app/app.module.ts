import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UserListComponent } from './user/user-list/user-list.component';

export const routes: Route[] = [
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: '**',
        redirectTo: 'users'
    }
];

@NgModule({
    declarations: [
        AppComponent
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
