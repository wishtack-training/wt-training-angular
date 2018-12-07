import { browser, element } from 'protractor';
import { getRoleLocator } from './helpers';


export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getTitleText() {
        return element(getRoleLocator('app-title')).getText();
    }
}
