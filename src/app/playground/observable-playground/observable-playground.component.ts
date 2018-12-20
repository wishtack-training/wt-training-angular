import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { bufferCount, filter, map, onErrorResumeNext } from 'rxjs/operators';

@Component({
    selector: 'wt-observable-playground',
    templateUrl: './observable-playground.component.html',
    styleUrls: ['./observable-playground.component.scss']
})
export class ObservablePlaygroundComponent implements OnInit {

    ngOnInit() {

        const data$ = interval(100);

        const dataTransformed$ = data$
            .pipe(
                map(value => value % 10),
                bufferCount(3),
                filter(value => {

                    if (value[0] === 7) {
                        throw new Error('test');
                    }

                    return value[0] > 5;
                })
            );

        const subscription = dataTransformed$
            .pipe(
                onErrorResumeNext(of([1, 1, 1]))
            )
            .subscribe({
                next: data => console.log(data),
                error: err => console.error('ERROR!'),
                complete: () => {
                    console.log('Done!');
                }
            });

        // subscription.unsubscribe();

    }

}
