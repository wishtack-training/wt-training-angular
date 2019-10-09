import { TestBed } from '@angular/core/testing';
import { SettingsQuery } from './settings.query';
import { SettingsService } from './settings.service';
import { SettingsStore } from './settings.store';

describe('SettingsService', () => {
  let settingsService: SettingsService;
  beforeEach(() => (settingsService = TestBed.get(SettingsService)));

  let settingsStore: SettingsStore;
  beforeEach(() => (settingsStore = TestBed.get(SettingsStore)));

  let settingsQuery: SettingsQuery;
  beforeEach(() => (settingsQuery = TestBed.get(SettingsQuery)));

  it('should hide toolbar', () => {
    settingsStore.update({isToolbarDisplayed: true});

    settingsService.hideToolbar();

    expect(settingsQuery.getValue().isToolbarDisplayed).toBe(false);
  });

  it('should show toolbar', () => {
    settingsStore.update({isToolbarDisplayed: false});

    settingsService.showToolbar();

    expect(settingsQuery.getValue().isToolbarDisplayed).toBe(true);
  });

  it('should toggle toolbar', () => {
    settingsStore.update({isToolbarDisplayed: false});

    settingsService.toggleToolbar();

    expect(settingsQuery.getValue().isToolbarDisplayed).toBe(true);

    settingsService.toggleToolbar();

    expect(settingsQuery.getValue().isToolbarDisplayed).toBe(false);
  });
});
