import { browser } from 'protractor';
import { getElementByRole, getFirstElementByRole } from './helpers/get-element-by-role';

export class SearchPage {

    go() {
        return browser.get('/book/search');
    }

    search(keywords: string) {
        return getElementByRole('book-search-input').sendKeys(keywords);
    }

    buyFirstBook() {
        return getFirstElementByRole('book-buy-button').click();
    }

}
