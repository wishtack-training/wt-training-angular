
describe('UserStore', () => {

    let user1: User;
    let user2: User;
    let user3: User;

    beforeEach(() => {
        user1 = new User('Foo', 'BAR');
        user2 = new User('John', 'DOE');
        user3 = new User('Foo', 'BAR');
    });

    xit('should add users', () => {

        const userStore = new UserStore();

        const userListEmpty = userStore.getUserList();

        expect(userListEmpty).toEqual([]);

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        const userList = userStore.getUserList();

        expect(userList).toEqual([
            user1,
            user2,
            user3
        ]);

    });

    xit('should remove users', () => {

        const userStore = new UserStore();

        const userListEmpty = userStore.getUserList();

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        userStore.removeUser(user1);

        const userList = userStore.getUserList();

        expect(userList).toEqual([
            user2,
            user3
        ]);

    });

});
