import { ClientAlbumsPage } from './app.po';

describe('client-albums App', function() {
  let page: ClientAlbumsPage;

  beforeEach(() => {
    page = new ClientAlbumsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
