import { AppPage } from './app.page';

describe('app', () => {

    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', async () => {

        await page.navigateTo();

        const title = await page.getTitleText();

        expect(title).toEqual('3C Evolution');

    });

});
