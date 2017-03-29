import { BclightPage } from './app.po';

describe('bclight App', () => {
  let page: BclightPage;

  beforeEach(() => {
    page = new BclightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
