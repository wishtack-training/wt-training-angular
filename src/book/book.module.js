/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */


'use strict';

import angular from 'angular';
import {BookFormComponent} from './book-form/book-form.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookPreviewComponent} from './book-preview/book-preview.component';
import {RatingComponent} from './book-rate/rating.component';

export const bookModule = angular.module('book', []);

bookModule.component('wtBookForm', BookFormComponent.config);
bookModule.component('wtBookPreview', BookPreviewComponent.config);
bookModule.component('wtBookList', BookListComponent.config);
bookModule.component('wtRating', RatingComponent.config);
