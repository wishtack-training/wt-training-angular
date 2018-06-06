import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message, Messenger } from './messenger/messenger';

export const slidingWindow = <T>(maxSize: number): OperatorFunction<T, T[]> => {
    return source => new Observable<T[]>(observer => {

        let itemList = [];

        source.subscribe({
            next: item => {

                itemList = [...itemList, item];

                /* Remove first item if size is too big. */
                if (itemList.length > maxSize) {
                    [, ...itemList] = itemList;
                }

                observer.next(itemList);

            },
            error: _error => observer.error(_error),
            complete: () => observer.complete()
        });
    });
};

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    messageForm = new FormGroup({
        content: new FormControl(),
        userName: new FormControl(null, Validators.required)
    });
    lastMessageList$: Observable<Message[]>;

    constructor(private _messenger: Messenger) {
        this.lastMessageList$ = this._messenger.onMessage()
            .pipe(
                slidingWindow(10),
                map(messageList => [...messageList].reverse())
            );
    }

    sendMessage() {
        this._messenger.sendMessage(this.messageForm.value)
            .subscribe();
        this.messageForm.controls.content.reset();
    }

    getPictureUrl(userName: string) {
        return `https://robohash.org/${encodeURIComponent(userName)}?set=set4`;
    }

}
