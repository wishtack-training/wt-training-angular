import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wt-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

    name = 'Foo';

    ngOnInit() {

        setInterval(() => {
            this.name += '.';
        }, 200);

    }

    reset() {
        this.name = '';
    }

    shouldShowResetButton() {
        return this.name.length > 10;
    }

}
