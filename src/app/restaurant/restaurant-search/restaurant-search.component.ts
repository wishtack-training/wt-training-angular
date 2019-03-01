import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { debounceTime, distinctUntilChanged, retry } from 'rxjs/operators';
import { RestaurantRepository } from '../restaurant-repository.service';
import { Restaurant } from './restaurant';

@Component({
    selector: 'wt-restaurant-search',
    templateUrl: './restaurant-search.component.html',
    styleUrls: ['./restaurant-search.component.scss']
})
export class RestaurantSearchComponent implements OnDestroy, OnInit {

    keywordsControl = new FormControl();
    restaurantList: Restaurant[];
    private _subscription: Subscription;

    constructor(
        private _restaurantRepository: RestaurantRepository
    ) {
    }

    ngOnInit() {

        this._subscription = this.keywordsControl.valueChanges
            .pipe(
                debounceTime(100),
                distinctUntilChanged(),
                switchMap(keywords => this._restaurantRepository
                    .searchRestaurants(keywords)
                    .pipe(
                        retry(3)
                    )
                )
            )
            .subscribe(restaurantList => {
                this.restaurantList = restaurantList;
            });

    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

}
