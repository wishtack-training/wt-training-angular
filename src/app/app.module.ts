import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserFormReactiveComponent } from './user/user-form-reactive/user-form-reactive.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { UserStore } from './user/user-store';
import { UserDetailComponent } from './user/user-detail/user-detail.component';


export const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent
    },
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
        redirectTo: 'demo'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        UserListComponent,
        UserPreviewComponent,
        UserFormComponent,
        UserFormReactiveComponent,
        UserSearchComponent,
        UserDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        UserStore
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
