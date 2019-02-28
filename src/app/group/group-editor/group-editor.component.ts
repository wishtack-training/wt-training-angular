import { Component, OnInit } from '@angular/core';
import { Group } from '../group';

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

}
