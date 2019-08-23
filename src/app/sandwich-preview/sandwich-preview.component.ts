import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Sandwich } from '../legacy-cart/sandwich';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-sandwich-preview',
    templateUrl: './sandwich-preview.component.html',
    styleUrls: ['./sandwich-preview.component.scss']
})
export class SandwichPreviewComponent {

    @Input() sandwich: Sandwich;

    shouldShowPrice() {
        return this.sandwich.price != null;
    }

}
