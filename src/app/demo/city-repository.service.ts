/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CityRepository {

    getCityList() {
        return [
            'Luxembourg',
            'Lyon'
        ];
    }

}
