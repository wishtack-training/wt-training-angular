/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export const bookRouteResolver = {

    DETAIL_PATH: 'detail',

    getBookDetailRoute(bookId: string) {
        return ['/book', this.DETAIL_PATH, bookId];
    }

};

