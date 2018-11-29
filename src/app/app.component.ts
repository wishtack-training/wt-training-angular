import { Component } from '@angular/core';
import { RecordRepository } from './record/record-repository.service';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    recordRepository = new RecordRepository();

}
