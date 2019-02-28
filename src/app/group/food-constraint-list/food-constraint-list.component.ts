import { Component, Input, OnInit } from '@angular/core';
import { FoodConstraint } from '../food-constraint';

@Component({
    selector: 'wt-food-constraint-list',
    templateUrl: './food-constraint-list.component.html',
    styleUrls: ['./food-constraint-list.component.scss']
})
export class FoodConstraintListComponent implements OnInit {

    @Input() foodConstraintList: FoodConstraint[];

    constructor() {
    }

    ngOnInit() {
    }

}
