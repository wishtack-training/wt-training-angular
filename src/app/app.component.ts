import { Component } from '@angular/core';
import { SettingsQuery } from './settings/settings.query';
import { UserQuery } from './user/user.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isToolbarDisplayed$ = this._settingsQuery.isToolbarDisplayed$;
  email$ = this._userQuery.email$;

  constructor(
    private _settingsQuery: SettingsQuery,
    private _userQuery: UserQuery
  ) {}
}
