/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

require('./book-preview.component.scss');

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


