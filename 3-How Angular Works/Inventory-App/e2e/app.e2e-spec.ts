import { InventoryAppPage } from './app.po';

describe('inventory-app App', () => {
  let page: InventoryAppPage;

  beforeEach(() => {
    page = new InventoryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
