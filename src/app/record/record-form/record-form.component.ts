import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DnsRecord } from '../dns-record';

@Component({
    selector: 'wt-record-form',
    templateUrl: './record-form.component.html',
    styleUrls: ['./record-form.component.scss']
})
export class RecordFormComponent {

    @Output() recordSubmit = new EventEmitter<DnsRecord>();

    recordForm = new FormGroup({
        type: new FormControl(),
        host: new FormControl(),
        value: new FormControl()
    });

    submitRecord() {
        const record = new DnsRecord(this.recordForm.value);
        this.recordSubmit.emit(record);
        this.recordForm.reset();
    }

}
