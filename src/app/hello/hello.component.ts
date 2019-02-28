import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wt-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

    cityList = [
        'Bourges',
        'Lyon',
        'Paris',
        'Strasbourg',
        'Toulon'
    ];
    favoriteCity: string;
    now: Date;

    ngOnInit() {
        /* @hack: Don't do this at home. */
        this.now = new Date();
        setInterval(() => {
            this.now = new Date();
        }, 1000);
    }

    getUserName() {
        return 'Foo';
    }

    selectFavoriteCity(city: string) {
        this.favoriteCity = city;
    }

    resetFavoriteCity() {
        this.favoriteCity = null;
    }

}
