/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListComponent } from './book-list/book-list.component';


export enum BookCollectionDisplayMode {
    Grid = 'grid',
    List = 'list'
}

export const bookCollectionComponentMap = new Map<BookCollectionDisplayMode,
    Type<BookCollectionComponent>>([
    [BookCollectionDisplayMode.Grid, BookGridComponent],
    [BookCollectionDisplayMode.List, BookListComponent]
]);

export interface BookCollectionComponent {
    bookList: Book[];
    canAddToCart: boolean;
    canRemove: boolean;
    bookRemove: Observable<Book>;
}
