import { Component, Input } from '@angular/core';
import { Sandwich } from '../cart/sandwich';

@Component({
    selector: 'wt-sandwich-preview',
    templateUrl: './sandwich-preview.component.html',
    styleUrls: ['./sandwich-preview.component.scss']
})
export class SandwichPreviewComponent {

    @Input() sandwich: Sandwich;

}
