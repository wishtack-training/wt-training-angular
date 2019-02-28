import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';

@Component({
    selector: 'wt-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

    @Input() person: Person;
    @Output() personRemove = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    removePerson() {
        this.personRemove.emit();
    }

}
