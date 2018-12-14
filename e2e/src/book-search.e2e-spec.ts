/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { browser } from 'protractor';
import { BookCartPage } from './book-cart.page';
import { BookSearchPage } from './book-search.page';

describe('book search', () => {

    const bookSearchPage = new BookSearchPage();
    const bookCartPage = new BookCartPage();

    it('should go to search page', async () => {
        await bookSearchPage.go();
    });

    it('should search for eXtreme Programming', async () => {
        await bookSearchPage.search('eXtreme Programming');
    });

    it('should update url', async () => {
        const url = await browser.getCurrentUrl();
        expect(url).toContain('eXtreme%20Programming');
    });

    xit('should buy first book', async () => {
        await bookSearchPage.clickFirstBook();
    });

    xit('should go to cart', async () => {
        await bookCartPage.go();
    });

    xit('should check that the book is there', async () => {
        const title = await bookCartPage.getFirstBookTitle();
        expect(title.toLowerCase()).toContain('extreme programming');
    });

});
