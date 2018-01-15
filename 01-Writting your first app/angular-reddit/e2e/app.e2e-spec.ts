import { AngularRedditPage } from './app.po';

describe('angular-reddit App', () => {
  let page: AngularRedditPage;

  beforeEach(() => {
    page = new AngularRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
