/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import * as io from 'socket.io-client';
import Socket = SocketIOClient.Socket;

export interface MessageInfo {
    message: string;
    userName: string;
}

@Injectable({
    providedIn: 'root'
})
export class Messenger {

    private _socket$: Observable<Socket>;

    constructor() {

        this._socket$ = new Observable<Socket>(observer => {

            const socket: SocketIOClient.Socket = io.connect('http://localhost:3000') as SocketIOClient.Socket;

            observer.next(socket);

            return () => socket.close();

        })
            .pipe(
                shareReplay(1)
            );

    }

    onMessage(): Observable<MessageInfo> {

        return this._socket$
            .pipe(
                switchMap(socket => new Observable(observer => {
                    socket.on('message', data => {
                        observer.next(data);
                    });
                }))
            );

    }

    sendMessage(args: MessageInfo) {

        return this._socket$
            .pipe(
                map(socket => socket.emit('message', args))
            );

    }

}
