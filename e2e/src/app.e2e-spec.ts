import { AppPage } from './app.po';

describe('app', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display title', async () => {
        await page.navigateTo();
        const title = await page.getTitleText();
        expect(title).toEqual('TITLE');
    });

});
