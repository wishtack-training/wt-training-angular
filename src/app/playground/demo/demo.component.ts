import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferCount, filter, retry, take, tap } from 'rxjs/operators';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

    userName = 'Foo';

    cityList = [
        'Lyon',
        'Marseille',
        'Nice'
    ];

    score = 3;

    constructor() {
        /* @HACK: Do not put this in constructor. */
        // setInterval(() => {
        //     this.userName += '.';
        // }, 1000);

    }

    ngOnInit() {

        const data$ = interval(100)
            .pipe(
                filter(data => data % 3 !== 0),
                bufferCount(10, 1),
                tap(dataList => {

                    // if (dataList.includes(17)) {
                    //     throw new Error('invalid value');
                    // }

                }),
                take(3),
                retry(3)
            );

        data$.subscribe({
            next: data => console.log(data),
            error: (err) => console.log('ERROR'),
            complete: () => {
                console.log('DONE');
            }
        });

        // this.retrieveBooks()
        //     .then(items => {
        //         console.log(items);
        //     });
    }

    async retrieveBooks() {

        const url = 'https://www.googleapis.com/books/v1/volumes?q=extreme%20programming';

        try {

            const response = await fetch(url);

            const data = await response.json();

            return data.items;

        } catch (error) {

            console.log(`D'OH`);

        }

    }

    reset() {
        this.userName = 'Foo';
    }

    updateScore(score: number) {
        this.score = score;
    }

}
