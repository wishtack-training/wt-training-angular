/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */


'use strict';

import angular from 'angular';
import {BookListComponent} from './book-list/book-list.component';
import {RatingComponent} from './book-rate/rating.component';

export const bookModule = angular.module('book', []);

bookModule.component('wtBookList', BookListComponent.config);
bookModule.component('wtRating', RatingComponent.config);
