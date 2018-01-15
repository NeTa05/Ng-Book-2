import { RoutingPage } from './app.po';

describe('routing App', () => {
  let page: RoutingPage;

  beforeEach(() => {
    page = new RoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
