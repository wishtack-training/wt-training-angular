import { NgcliPlaygroundPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('ngcli-playground App', function() {
  let page: NgcliPlaygroundPage;

  beforeEach(() => {
    page = new NgcliPlaygroundPage();
  });

  it('should display message saying app works', () => {

    page.navigateTo();

    element(by.css('input')).sendKeys('foobar');
    element(by.css('form')).submit();

    expect(page.getParagraphText())
        .toEqual('WELCOME' as any);

    expect(element(by.css('.wt-logout')).isDisplayed()).toBeTruthy();

    browser.sleep(10);

    element(by.css('.wt-logout')).click();

  });
});
