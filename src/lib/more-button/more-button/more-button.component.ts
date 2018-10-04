import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';

export enum ButtonShape {
    default = 'default',
    circle = 'circle'
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-more-button',
    templateUrl: './more-button.component.html',
    styleUrls: ['./more-button.component.css']
})
export class MoreButtonComponent implements OnChanges, OnInit {

    @Input() label = 'MORE';
    @Input() shape: ButtonShape;
    @Input() shouldTriggerOnHover = false;
    @Output() displayActionsChange = new EventEmitter<boolean>();

    buttonShapeEnum = ButtonShape;
    shouldDisplayActions = false;

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.label != null && this.label == null) {
            console.warn(`<wt-more-button>: 'label' input should not be null or undefined.`);
            this.label = 'MORE';
        }

    }

    onMoreButtonMouseEnter() {
        if (this.shouldTriggerOnHover) {
            this._setShouldDisplayActions(true);
        }
    }

    onMoreButtonMouseLeave() {
        if (this.shouldTriggerOnHover) {
            this._setShouldDisplayActions(false);
        }
    }

    onMoreButtonClick() {
        this._setShouldDisplayActions(true);
    }

    onCancelButtonClick() {
        this._setShouldDisplayActions(false);
    }

    private _setShouldDisplayActions(shouldDisplayActions: boolean) {
        this.shouldDisplayActions = shouldDisplayActions;
        this.displayActionsChange.emit(shouldDisplayActions);
    }
}
