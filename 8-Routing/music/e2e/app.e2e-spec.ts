import { MusicPage } from './app.po';

describe('music App', () => {
  let page: MusicPage;

  beforeEach(() => {
    page = new MusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
