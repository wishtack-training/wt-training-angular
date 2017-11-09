import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit,
    SimpleChanges
} from '@angular/core';
import { User } from '../user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-map',
    templateUrl: './user-map.component.html',
    styleUrls: ['./user-map.component.css']
})
export class UserMapComponent implements OnChanges, OnInit {

    @Input() userList: User[];

    subject = new BehaviorSubject<User[]>(null);

    constructor(private _element: ElementRef) {

    }

    ngOnInit() {
        this.subject
            .debounceTime(3000)
            .subscribe(userList => {
            this._updateView(userList);
        });
    }


    ngOnChanges(changes: SimpleChanges) {
        if (changes.userList != null) {

            this.subject.next(this.userList);

        }
    }

    private _updateView(userList) {

        // Compare objects manually using some service
        // @warning compare references.
        const canvas = this._element.nativeElement.querySelector('div');
        // @warning XSS: use textContent
        canvas.innerHTML = JSON.stringify(userList);
    }
}
