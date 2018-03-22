/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Exception } from './exception';

export class NotImplementedError extends Exception {

    constructor() {
        super('Not implemented yet!');
    }

}
