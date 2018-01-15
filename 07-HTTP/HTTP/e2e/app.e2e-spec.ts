import { HTTPPage } from './app.po';

describe('http App', () => {
  let page: HTTPPage;

  beforeEach(() => {
    page = new HTTPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
