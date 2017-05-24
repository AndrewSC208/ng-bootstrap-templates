import { NgBootstrapTemplatesPage } from './app.po';

describe('ng-bootstrap-templates App', () => {
  let page: NgBootstrapTemplatesPage;

  beforeEach(() => {
    page = new NgBootstrapTemplatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
