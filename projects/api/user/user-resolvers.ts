/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { IResolvers } from 'apollo-server-express';
import { User } from './user';
import { UserStore } from './user-store';

const userStore = new UserStore();

userStore.addUser(new User({
    firstName: 'Foo',
    lastName: 'BAR'
}));
userStore.addUser(new User({
    firstName: 'John',
    lastName: 'DOE'
}));

export const userResolvers: IResolvers = {
    Query: {
        user(parent, {userId}: { userId: string }) {
            return userStore.getUser(userId);
        },
        users() {
            return userStore.getUserList();
        }
    },
    Mutation: {
        addUser(parent, {user}: {user: User}) {
            return userStore.addUser(user);
        },
        removeUser(parent, {userId}: {userId: string}) {
            userStore.removeUser(userId);
            return userId;
        }
    }
};
