/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { browser, element } from 'protractor';
import { getRoleLocator } from './helpers';


export class BookSearchPage {

    navigateTo() {
        return browser.get('/book/search');
    }

    search(keywords: string) {
        return element(getRoleLocator('book-search-input')).sendKeys(keywords);
    }

    getFirstResultTitle() {
        return element.all(getRoleLocator('book-preview-title')).first().getText();
    }

}
