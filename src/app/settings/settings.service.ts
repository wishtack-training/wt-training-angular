import { Injectable } from '@angular/core';
import { SettingsStore } from './settings.store';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private _settingsStore: SettingsStore) {}

  hideToolbar() {
    this._settingsStore.update({ isToolbarDisplayed: false });
  }

  showToolbar() {
    this._settingsStore.update({ isToolbarDisplayed: true });
  }

  toggleToolbar() {
    this._settingsStore.update(state => {
      return {
        ...state,
        isToolbarDisplayed: !state.isToolbarDisplayed
      };
    });
  }
}
