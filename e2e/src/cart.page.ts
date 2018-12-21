import { browser } from 'protractor';
import { getFirstElementByRole } from './helpers/get-element-by-role';

export class CartPage {

    go() {
        return browser.get('/book/cart');
    }

    getFirstBookTitle() {
        return getFirstElementByRole('book-title').getText();
    }
}
