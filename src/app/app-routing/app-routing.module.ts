import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, LoginModule } from '../login/login.component';
import {
  SettingsComponent,
  SettingsModule
} from '../settings/settings.component';
import {
  UserProfileComponent,
  UserProfileModule
} from '../user-profile/user-profile.component';
import { appRouteHelper } from './app.route-helper';

export const routes: Routes = [
  {
    /* /login */
    path: appRouteHelper.LOGIN_PATH,
    component: LoginComponent
  },
  {
    path: appRouteHelper.SETTINGS_PATH,
    component: SettingsComponent
  },
  {
    path: appRouteHelper.USER_PROFILE_PATH,
    component: UserProfileComponent
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
    SettingsModule,
    UserProfileModule
  ]
})
export class AppRoutingModule {}
