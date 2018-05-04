import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { bufferCount, filter, map, take } from 'rxjs/operators';

@Component({
    selector: 'wt-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

    count: number;
    value: number;
    value$: Observable<number>;
    isValueDisplayed = true;

    constructor() {
    }

    async ngOnInit() {

        this.promiseExample()
            .then(count => this.count = count);

        this.count = await this.asyncAwaitExample();

        this.observableExample();


    }

    promiseExample(): Promise<number> {

        return fetch('https://wt-users.getsandbox.com/users')
            .then((response) => response.json())
            .then(data => {
                return data.length;
            })
            .catch(error => {
                console.error(`D'OH 🍺!`);
            });

    }

    async asyncAwaitExample(): Promise<number> {

        try {

            const response = await fetch('https://wt-users.getsandbox.com/users');

            const data = await response.json();

            return data.length;

        } catch (error) {
            console.error(`FaiL!`);
        }

    }

    observableExample() {

        const myInterval = (timeInterval) => {

            return new Observable<number>(observer => {

                let value = 0;

                const handler = setInterval(() => {
                    observer.next(value++);
                }, timeInterval);

                return () => {
                    clearInterval(handler);
                };

            });

        };

        this.value$ = myInterval(1000)
            .pipe(
                map(value => value * 2),
                // filter(value => value !== 0),
                // bufferCount(4),
                take(5)
            );

        this.value$.subscribe({
            next: value => this.value = value,
            error: error => console.error('FAIL!'),
            complete: () => console.log('FINISHED!')
        });

    }

}
