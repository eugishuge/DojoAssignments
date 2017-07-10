import { EugenePortfolioPage } from './app.po';

describe('eugene-portfolio App', () => {
  let page: EugenePortfolioPage;

  beforeEach(() => {
    page = new EugenePortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
