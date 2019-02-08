/**
 *
 * (c) 2013-2019 Wishtack
 *
 */

export const bookRouteResolver = {

    BASE_PATH: 'book',

    SEARCH_PATH: 'search',

    searchBookRoute() {
        return ['/', this.BASE_PATH, this.SEARCH_PATH];
    }

};
