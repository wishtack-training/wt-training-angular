import { browser, by, element } from 'protractor';

export class BookSearchPage {

    go() {
        return browser.get('/book/search');
    }

    search(keywords) {
        return element(by.css('[data-role="title-input"]')).sendKeys(keywords);
    }

    clickFirstBook() {
        return element.all(by.css('[data-role="buy-button"]')).get(0).click();
    }
}