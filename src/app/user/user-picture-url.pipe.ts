/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
    name: 'wtUserPictureUrl'
})
export class UserPictureUrlPipe implements PipeTransform {

    transform(user: User) {
        return `http://robohash.org/${user.firstName}`;
    }

}
