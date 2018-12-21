import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'wt-observable-playground',
    templateUrl: './observable-playground.component.html',
    styleUrls: ['./observable-playground.component.scss']
})
export class ObservablePlaygroundComponent implements OnInit {

    ngOnInit() {

        const subject = new BehaviorSubject(null);

        subject.next({
            isSignedIn: false
        });

        subject.next({
            isSignedIn: true
        });

        subject.subscribe(console.log);

        subject.next({
            isSignedIn: false
        });


        // const data$ = interval(100);
        //
        // const dataTransformed$ = data$
        //     .pipe(
        //         map(value => value % 10),
        //         bufferCount(3),
        //         filter(value => {
        //
        //             if (value[0] === 7) {
        //                 throw new Error('test');
        //             }
        //
        //             return value[0] > 5;
        //         })
        //     );
        //
        // dataTransformed$
        //     .pipe(
        //         onErrorResumeNext(of([1, 1, 1]))
        //     )
        //     .subscribe({
        //         next: data => console.log(data),
        //         error: err => console.error('ERROR!'),
        //         complete: () => {
        //             console.log('Done!');
        //         }
        //     });

    }

}
