import { Component } from '@angular/core';
import { appRouteHelper } from './app.route-helper';
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
  appRouteHelper = appRouteHelper;

  constructor(
    private _settingsQuery: SettingsQuery,
    private _userQuery: UserQuery
  ) {}
}
