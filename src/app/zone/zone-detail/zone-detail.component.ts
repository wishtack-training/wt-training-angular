import { Component } from '@angular/core';
import { DnsRecord } from '../../record/dns-record';
import { RecordRepository } from '../../record/record-repository.service';

@Component({
    selector: 'wt-zone-detail',
    templateUrl: './zone-detail.component.html',
    styleUrls: ['./zone-detail.component.scss']
})
export class ZoneDetailComponent {

    private _recordRepository = new RecordRepository();

    addRecord(record: DnsRecord) {
        this._recordRepository.addRecord(record);
    }

    getRecordList() {
        return this._recordRepository.getRecordList();
    }

    removeRecord(record: DnsRecord) {
        this._recordRepository.removeRecord(record);
    }

}
