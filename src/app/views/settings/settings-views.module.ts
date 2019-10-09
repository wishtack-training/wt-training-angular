import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  SettingsComponent,
  SettingsModule
} from '../../settings/settings.component';

const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(settingsRoutes), SettingsModule]
})
export class SettingsViewsModule {}
