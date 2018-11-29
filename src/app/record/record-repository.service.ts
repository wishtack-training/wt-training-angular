import { Injectable } from '@angular/core';
import { DnsRecord } from './dns-record';

@Injectable({
    providedIn: 'root'
})
export class RecordRepository {

    private _recordList: DnsRecord[] = [];

    getRecordList() {
        return this._recordList;
    }

    addRecord(record: DnsRecord) {
        this._recordList = [...this._recordList, record];
    }

    removeRecord(record: DnsRecord) {
        this._recordList = this._recordList.filter(_record => _record !== record);
    }

}
