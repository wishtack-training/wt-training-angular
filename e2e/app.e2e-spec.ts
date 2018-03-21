import { browser, by, element } from 'protractor';

describe('training App', () => {


    it('should add users', async () => {

        await browser.get('/');

        await element(by.css('input')).sendKeys('Foo');

        await element(by.buttonText('ADD')).click();

        await element(by.css('input')).sendKeys('John');

        await element(by.buttonText('ADD')).click();

        const userElementList = await element.all(by.css('li'));

        expect(userElementList.length).toEqual(2);
        expect(await userElementList[0].getText()).toEqual('Foo');
        expect(await userElementList[1].getText()).toEqual('John');

    });

});
