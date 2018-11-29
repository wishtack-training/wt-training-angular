import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DnsRecord } from '../../record/dns-record';
import { RecordRepository } from '../../record/record-repository.service';

@Component({
    selector: 'wt-zone-detail',
    templateUrl: './zone-detail.component.html',
    styleUrls: ['./zone-detail.component.scss']
})
export class ZoneDetailComponent implements OnDestroy, OnInit {

    recordList: DnsRecord[];

    private _subscription: Subscription;

    constructor(
        private _httpClient: HttpClient,
        private _recordRepository: RecordRepository
    ) {
    }

    ngOnInit() {

        // const data$ = interval(100);
        //
        // const result$ = data$
        //     .pipe(
        //         filter(data => {
        //             if (data === 10) {
        //                 throw new Error('test');
        //             }
        //             return data % 3 !== 0;
        //         }),
        //         map(data => data * 2),
        //         bufferTime(300),
        //         retry(3)
        //     );
        //
        // result$.subscribe(data => console.log(data));

        this._subscription = this._recordRepository.getRecordList()
            .subscribe(recordList => this.recordList = recordList);

    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    shouldShowBottomForm() {
        return this.recordList != null && this.recordList.length > 5;
    }

    addRecord(record: DnsRecord) {
        throw new Error('😱 Not implemented yet!');
    }

}
