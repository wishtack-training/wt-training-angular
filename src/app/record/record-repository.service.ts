import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DnsRecord } from './dns-record';

export interface ApiResponse<T> {
    data: T;
}

export type RecordListApiResponse = ApiResponse<Partial<DnsRecord>[]>;

@Injectable({
    providedIn: 'root'
})
export class RecordRepository {

    constructor(private _httpClient: HttpClient) {
    }

    getRecordList(): Observable<DnsRecord[]> {

        return this._httpClient.get<RecordListApiResponse>('https://wt-zone.getsandbox.com/zones/default/records')
            .pipe(
                map(response => {
                    return response.data.map(data => new DnsRecord(data));
                })
            );
    }

    addRecord(record: DnsRecord) {
        throw new Error('😱 Not implemented yet!');
    }

    removeRecord(record: DnsRecord) {
        throw new Error('😱 Not implemented yet!');
    }

}

