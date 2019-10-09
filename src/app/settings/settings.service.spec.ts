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

  describe('with toolbar displayed', () => {
    beforeEach(() => settingsStore.update({ isToolbarDisplayed: true }));

    it('should hide toolbar', () => {
      settingsService.hideToolbar();

      expect(settingsQuery.getValue().isToolbarDisplayed).toBe(false);
    });

    it('should toggle toolbar', () => {
      settingsService.toggleToolbar();

      expect(settingsQuery.getValue().isToolbarDisplayed).toBe(false);
    });
  });

  describe('with toolbar hidden', () => {
    beforeEach(() => settingsStore.update({ isToolbarDisplayed: false }));

    it('should show toolbar', () => {
      settingsService.showToolbar();

      expect(settingsQuery.getValue().isToolbarDisplayed).toBe(true);
    });

    it('should toggle toolbar', () => {
      settingsService.toggleToolbar();

      expect(settingsQuery.getValue().isToolbarDisplayed).toBe(true);
    });
  });
});
