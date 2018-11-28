import { Component } from '@angular/core';
import { RecordRepository } from './record/record-repository';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    recordRepository = new RecordRepository();

}
