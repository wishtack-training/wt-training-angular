import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from './restaurant-search/restaurant';

@Injectable({
    providedIn: 'root'
})
export class RestaurantRepository {

    private _restaurantsUrl = 'https://restaurants-cfyytauslm.now.sh/restaurants';

    constructor(private _httpClient: HttpClient) {
    }

    searchRestaurants(keywords: string): Observable<Restaurant[]> {

        return this._httpClient
            .get<Partial<Restaurant>[]>(this._restaurantsUrl, {
                params: {
                    q: keywords
                }
            })
            .pipe(
                map(dataList => {

                    const restaurantList = dataList
                        .map(data => new Restaurant(data));

                    return restaurantList;

                })
            );

    }

}
