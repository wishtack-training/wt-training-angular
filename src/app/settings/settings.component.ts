import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(private _settingsService: SettingsService) {}

  ngOnInit() {}

  showToolbar() {
    this._settingsService.showToolbar();
  }

  hideToolbar() {
    this._settingsService.hideToolbar();
  }
}

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule],
  exports: [SettingsComponent]
})
export class SettingsModule {}
