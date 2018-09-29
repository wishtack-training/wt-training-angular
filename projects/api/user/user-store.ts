/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export class UserStore {

    private _userList = [
        {
            firstName: 'Foo',
            lastName: 'BAR'
        }
    ];

    getUserList() {
        return this._userList;
    }

}
