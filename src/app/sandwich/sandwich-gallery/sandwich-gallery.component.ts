import { Component, OnInit } from '@angular/core';
import { SandwichStore } from '../sandwich-store';

@Component({
    selector: 'wt-sandwich-gallery',
    templateUrl: './sandwich-gallery.component.html',
    styleUrls: ['./sandwich-gallery.component.scss']
})
export class SandwichGalleryComponent implements OnInit {

    sandwichStore = new SandwichStore();

    constructor() {
    }

    ngOnInit() {
    }

    addSandwich() {
        prompt('name ?');
    }
}
