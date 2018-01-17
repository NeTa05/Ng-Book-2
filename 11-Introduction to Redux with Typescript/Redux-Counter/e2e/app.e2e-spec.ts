import { ReduxCounterPage } from './app.po';

describe('redux-counter App', () => {
  let page: ReduxCounterPage;

  beforeEach(() => {
    page = new ReduxCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
