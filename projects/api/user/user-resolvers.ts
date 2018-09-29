/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { UserStore } from './user-store';

const userStore = new UserStore();


export const userResolvers = {
    Query: {
        users: () => {
            return userStore.getUserList();
        }
    }
};
