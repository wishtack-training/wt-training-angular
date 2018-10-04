import { Component, Input, OnInit } from '@angular/core';

export enum ButtonShape {
    default = 'default',
    circle = 'circle'
}

@Component({
    selector: 'wt-more-button',
    templateUrl: './more-button.component.html',
    styleUrls: ['./more-button.component.css']
})
export class MoreButtonComponent implements OnInit {

    @Input() label = 'More';
    @Input() shape: ButtonShape;
    @Input() shouldTriggerOnHover = false;

    circle = ButtonShape.circle;
    shouldDisplayActions = false;

    ngOnInit() {
    }

    onMoreButtonMouseEnter() {
        if (this.shouldTriggerOnHover) {
            this.shouldDisplayActions = true;
        }
    }

    onMoreButtonMouseLeave() {
        if (this.shouldTriggerOnHover) {
            this.shouldDisplayActions = false;
        }
    }

}
