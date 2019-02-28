import { Component, OnInit } from '@angular/core';
import { FoodConstraint } from '../food-constraint';
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
        this.addPerson();
        this.addPerson();
    }

    addPerson() {

        this.group.addPerson(new Person({
            firstName: 'Foo',
            lastName: 'BAR',
            foodConstraintList: [
                FoodConstraint.GlutenIntolerant,
                FoodConstraint.Vegan
            ]
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
