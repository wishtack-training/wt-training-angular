import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SettingsState {
  isToolbarDisplayed: boolean;
}

export function createInitialState(): SettingsState {
  return {
    isToolbarDisplayed: true
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'settings'
})
export class SettingsStore extends Store<SettingsState> {
  constructor() {
    super(createInitialState());
  }
}
