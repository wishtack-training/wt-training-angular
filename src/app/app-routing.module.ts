import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRouteHelper } from './app.route-helper';
import { IsNotSignedInGuard } from './auth/is-not-signed-in.guard';
import { IsSignedInGuard } from './auth/is-signed-in.guard';
import { LoginComponent, LoginModule } from './login/login.component';
import {
  TodoListComponent,
  TodoListModule
} from './todo-list/todo-list.component';
import {
  UserProfileComponent,
  UserProfileModule
} from './user-profile/user-profile.component';

export const routes: Routes = [
  {
    /* /login */
    path: appRouteHelper.LOGIN_PATH,
    component: LoginComponent,
    canActivate: [IsNotSignedInGuard]
  },
  {
    /* /todos */
    path: appRouteHelper.TODOS_PATH,
    component: TodoListComponent,
    canActivate: [IsSignedInGuard]
  },
  {
    path: appRouteHelper.SETTINGS_PATH,
    loadChildren: () =>
      import('./views/settings/settings-views.module').then(
        m => m.SettingsViewsModule
      )
  },
  {
    path: appRouteHelper.USER_PROFILE_PATH,
    component: UserProfileComponent,
    canActivate: [IsSignedInGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule.forRoot(routes),
    TodoListModule,
    UserProfileModule
  ]
})
export class AppRoutingModule {}
