import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', async () => {

        await page.navigateTo();

        await browser.executeScript(() => {
            window['httpTestingController'].expectOne(() => true, 'book search').flush({
                items: [
                    {
                        volumeInfo: {
                            title: 'DEMO'
                        }
                    }
                ]
            });
            window['changeDetectorRef'].detectChanges();
        });

        const text = await element(by.css('.wt-book-list-item')).getText();

        expect(text).toContain('DEMO');

    });

});
