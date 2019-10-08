import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, LoginModule } from '../login/login.component';
import { UserProfileComponent, UserProfileModule } from '../user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-profile',
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
    UserProfileModule
  ]
})
export class AppRoutingModule {
}
