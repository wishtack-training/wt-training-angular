/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export class Exception {

    constructor(private _message: string) {
    }

    toString() {
        return this._message;
    }

}
