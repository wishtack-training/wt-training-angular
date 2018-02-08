/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { UserStore } from './user-store';
import { User } from './user';

describe('UserStore', () => {

    let userStore: UserStore;
    let user1: User;
    let user2: User;

    beforeEach(() => {
        userStore = new UserStore();

        user1 = new User({
            firstName: 'Foo',
            lastName: 'BAR'
        });
        user2 = new User({
            firstName: 'John',
            lastName: 'DOE'
        });
    });

    it('should add users', () => {

        userStore.addUser(user1);
        userStore.addUser(user2);

        expect(userStore.getUserList()).toEqual([
            user1,
            user2
        ]);

    });

});
