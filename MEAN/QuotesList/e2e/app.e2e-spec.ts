import { QuotesListPage } from './app.po';

describe('quotes-list App', () => {
  let page: QuotesListPage;

  beforeEach(() => {
    page = new QuotesListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
