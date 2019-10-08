import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SettingsState, SettingsStore } from './settings.store';

@Injectable({
  providedIn: 'root'
})
export class SettingsQuery extends Query<SettingsState> {
  isToolbarDisplayed$ = this.select('isToolbarDisplayed');

  constructor(protected store: SettingsStore) {
    super(store);
  }
}
