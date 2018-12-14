import { browser, by, element } from 'protractor';

export class BookCartPage {

    go() {
        return browser.get('/book/cart');
    }

    getFirstBookTitle() {
        return element.all(by.css('[data-role="book-title"]')).get(0).getText();
    }

}