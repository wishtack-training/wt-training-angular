import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FoodConstraint } from '../../group/food-constraint';

export class Restaurant {
    id: string;
    city: string;
    foodConstraints: FoodConstraint[];
    name: string;

    constructor(args: Partial<Restaurant> = {}) {
        this.id = args.id;
        this.city = args.city;
        this.foodConstraints = args.foodConstraints;
        this.name = args.name;
    }

}

@Component({
    selector: 'wt-restaurant-search',
    templateUrl: './restaurant-search.component.html',
    styleUrls: ['./restaurant-search.component.scss']
})
export class RestaurantSearchComponent implements OnInit {

    keywordsControl = new FormControl();
    restaurantList: Restaurant[];

    private _restaurantsUrl = 'https://restaurants-cfyytauslm.now.sh/restaurants';

    constructor(
        private _httpClient: HttpClient,
    ) {
    }

    ngOnInit() {
    }

    search() {

        const keywords = this.keywordsControl.value;

        this._httpClient
            .get<Partial<Restaurant>[]>(this._restaurantsUrl, {
                params: {
                    q: keywords
                }
            })
            .subscribe(dataList => {

                this.restaurantList = dataList
                    .map(data => new Restaurant(data));

            });

    }

}
