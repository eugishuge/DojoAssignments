import { AnimalPage } from './app.po';

describe('animal App', () => {
  let page: AnimalPage;

  beforeEach(() => {
    page = new AnimalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
