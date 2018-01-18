/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { UserStore } from './user-store';
import { User } from './user';


describe('UserStore', () => {

    let user1: User;
    let user2: User;

    beforeEach(() => {
        user1 = new User({firstName: 'Foo'});
        user2 = new User({firstName: 'John'});
    });

    it('should add users', () => {

        const userStore = new UserStore();

        userStore.addUser(user1);
        userStore.addUser(user2);

        expect(userStore.getUserList())
            .toEqual([
                user1,
                user2
            ]);

    });

});
