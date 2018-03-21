import { browser, by, element } from 'protractor';
import { UserListPage } from './user-list.page';

describe('training App', () => {

    it('should add users', async () => {

        const userListPage = new UserListPage();

        await userListPage.go();

        await userListPage.addUser({firstName: 'Foo'});
        await userListPage.addUser({firstName: 'John'});

        const userNameList = await userListPage.getUserNameList();

        expect(userNameList.length).toEqual(2);
        expect(userNameList[0]).toEqual('Foo');
        expect(userNameList[1]).toEqual('John');

    });

});
