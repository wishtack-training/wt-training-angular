import { User } from './user';
import { UserStore } from './user-store';

describe('UserStore', () => {

    let userStore: UserStore;

    let user1: User;
    let user2: User;
    let user3: User;

    beforeEach(() => {

        userStore = new UserStore();

        user1 = new User('Foo', 'BAR');
        user2 = new User('John', 'DOE');
        user3 = new User('Foo', 'BAR');

    });

    it('should add users', () => {

        const userListEmpty = userStore.getUserList();

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        const userList = userStore.getUserList();

        expect(userListEmpty).toEqual([]);

        expect(userList).toEqual([
            user1,
            user2,
            user3
        ]);

    });

    it('should remove users', () => {

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        userStore.removeUser(user1);

        const userListPartial = userStore.getUserList();

        expect(userListPartial).toEqual([
            user2,
            user3
        ]);

    });

});
