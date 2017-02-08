import { NgcliPlaygroundPage } from './app.po';

describe('ngcli-playground App', function() {
  let page: NgcliPlaygroundPage;

  beforeEach(() => {
    page = new NgcliPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
