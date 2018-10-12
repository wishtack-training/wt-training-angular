import { BookSearchPage } from './app.po';

describe('workspace-project App', () => {

    let bookSearchPage: BookSearchPage;

  beforeEach(() => {
      bookSearchPage = new BookSearchPage();
  });

    it('should find extreme programming book', async () => {

        await bookSearchPage.navigateTo();

        await bookSearchPage.searchBook('eXtreme Programming');

        const title = bookSearchPage.getFirstBookTitle();

        expect(title).toEqual('Extreme Programming Explained');

  });

});
