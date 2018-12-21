import { browser } from 'protractor';
import { getDataRoleSelector, getElementByRole, getFirstElementByRole } from './helpers/get-element-by-role';

class SearchPage {

    go() {
        return browser.get('/book/search');
    }

    search(keywords: string) {
        return getElementByRole('book-search-input').sendKeys(keywords);
    }

    buyFirstBook() {
        return getFirstElementByRole('book-buy-button').click();
    }

}

class CartPage {

    go() {
        return browser.get('/book/cart');
    }

    getFirstBookTitle() {
        return getFirstElementByRole('book-title').getText();
    }
}

describe('book search', () => {

    let searchPage: SearchPage;
    let cartPage: CartPage;

    beforeAll(() => {
        searchPage = new SearchPage();
        cartPage = new CartPage();
    });

    it('should go to search page', async () => {
        await searchPage.go();
    });

    it('should search of eXtreme Programming', async () => {
        await searchPage.search('eXtreme Programming');
    });

    it('should buy first book', async () => {
        await searchPage.buyFirstBook();
    });

    it('should go to cart', async () => {
        await cartPage.go();
    });

    it('should check cart is not empty', async () => {
        const title = await cartPage.getFirstBookTitle();
        expect(title.toLowerCase()).toContain('extreme programming');
    });

});
