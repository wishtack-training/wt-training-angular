import { CartPage } from './cart.page';
import { SearchPage } from './search.page';

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
