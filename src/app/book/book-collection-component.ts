/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Observable } from 'rxjs';
import { Book } from './book';

export interface BookCollectionComponent {
    bookList: Book[];
    canAddToCart: boolean;
    canRemove: boolean;
    bookRemove: Observable<Book>;
}
