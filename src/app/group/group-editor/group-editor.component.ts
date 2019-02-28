import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { Person } from '../person';

@Component({
    selector: 'wt-group-editor',
    templateUrl: './group-editor.component.html',
    styleUrls: ['./group-editor.component.scss']
})
export class GroupEditorComponent implements OnInit {

    group = new Group();

    constructor() {
    }

    ngOnInit() {
    }

    addPerson() {

        const name = prompt('name');

        this.group.addPerson(new Person({
            firstName: name
        }));

    }

    getPersonCount() {
        return this.group.getCount();
    }

    getPersonList() {
        return this.group.getPersonList();
    }

    removePerson(person: Person) {
        return this.group.removePerson(person);
    }

    getGroupConstraintList() {
        return this.group.getFoodConstraintList();
    }
}
