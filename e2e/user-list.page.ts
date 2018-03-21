import { browser, by, element } from 'protractor';

export class UserListPage {

    go() {
        return browser.get('/');
    }

    async addUser({firstName}: { firstName: string }) {

        await element(by.css('input')).sendKeys(firstName);

        await element(by.buttonText('ADD')).click();

    }

    async getUserNameList() {

        const userElementList = await element.all(by.css('li'));

        const userNamePromiseList = userElementList.map(userElement => userElement.getText());

        return await Promise.all(userNamePromiseList);

    }

}
