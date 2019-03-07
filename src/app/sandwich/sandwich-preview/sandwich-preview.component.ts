import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sandwich } from '../sandwich';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-sandwich-preview',
    templateUrl: './sandwich-preview.component.html',
    styleUrls: ['./sandwich-preview.component.scss']
})
export class SandwichPreviewComponent {

    @Input() buttonLabel = 'Remove';
    @Input() sandwich: Sandwich;
    @Output() sandwichRemove = new EventEmitter<string>();

    removeSandwich(sandwichId: string) {
        this.sandwichRemove.emit(sandwichId);
    }

}
