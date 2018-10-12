import { browser, by, element } from 'protractor';

export class BookSearchPage {

  navigateTo() {
      return browser.get('/book/search');
  }

    searchBook(title: string) {
        return element(by.css('input')).sendKeys(title);
    }

    getFirstBookTitle() {
        return element(by.css('a')).getText();
    }

}
