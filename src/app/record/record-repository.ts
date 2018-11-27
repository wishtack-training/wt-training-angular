import { Record } from './record';

export class RecordRepository {

    private _recordList: Record[] = [];

    getRecordList() {
        return this._recordList;
    }

    addRecord(record: Record) {
        this._recordList = [...this._recordList, record];
    }

    removeRecord(record: Record) {
        this._recordList = this._recordList.filter(_record => _record !== record);
    }

}
