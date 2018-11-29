import { Injectable } from '@angular/core';
import { DnsRecord } from './dns-record';

@Injectable({
    providedIn: 'root'
})
export class RecordRepository {

    getRecordList() {
        throw new Error('😱 Not implemented yet!');
    }

    addRecord(record: DnsRecord) {
        throw new Error('😱 Not implemented yet!');
    }

    removeRecord(record: DnsRecord) {
        throw new Error('😱 Not implemented yet!');
    }

}

