/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

export class BookPreviewComponent {

}

BookPreviewComponent.config = {
    bindings: {
        book: '<'
    },
    controller: BookPreviewComponent,
    template: require('./book-preview.component.html'),
    transclude: true
};


