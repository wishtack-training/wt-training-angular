import { BookSearchPage } from './book-search.page';

describe('book search', () => {

    let bookSearchPage: BookSearchPage;

    beforeAll(() => {
        bookSearchPage = new BookSearchPage();
    });

    it('should go to search page', async () => {
        await bookSearchPage.navigateTo();
    });

    it('should search for Angular', async () => {
        await bookSearchPage.search('Angular');
    });

    it('should check first result contains Angular', async () => {
        const title = await bookSearchPage.getFirstResultTitle();
        expect(title).toContain('Angular');
    });

});
