import { Component } from '@angular/core';
import { SettingsQuery } from './settings/settings.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isToolbarDisplayed$ = this._settingsQuery.isToolbarDisplayed$;

  constructor(private _settingsQuery: SettingsQuery) {}
}
