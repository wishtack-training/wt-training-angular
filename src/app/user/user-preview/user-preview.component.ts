import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {

    @Input() user: User;

    date$: Observable<Date>;
    month$: Observable<any>;
    year$: Observable<any>;

    ngOnInit() {

        this.date$ = Observable.interval(1000)
            .map(() => new Date())
            .shareReplay(1);

        this.year$ = this.date$.map(date => date.getFullYear());

        this.month$ = this.date$.map(date => date.getMonth());

    }

    getPictureUrl(user: User) {
        return `https://robohash.org/${user.firstName}`;
    }

}
