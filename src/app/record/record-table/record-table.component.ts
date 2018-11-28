import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DnsRecord } from '../dns-record';
import { RecordTableDataSource } from './record-table-datasource';

@Component({
    selector: 'wt-record-table',
    templateUrl: './record-table.component.html',
    styleUrls: ['./record-table.component.scss'],
})
export class RecordTableComponent implements OnChanges {

    @Input() recordList: DnsRecord[];
    @Output() recordRemove = new EventEmitter<DnsRecord>();

    dataSource: RecordTableDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['type', 'host', 'value', 'actions'];
    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;

    ngOnChanges(changes: SimpleChanges) {

        if (changes.recordList) {
            this.dataSource = new RecordTableDataSource(
                this._paginator,
                this._sort
            );
            this.dataSource.recordList = this.recordList;
        }

    }

    removeRecord(record: DnsRecord) {
        this.recordRemove.emit(record);
    }

}
