import { ProjectProductMgmtIIPage } from './app.po';

describe('project-product-mgmt-ii App', () => {
  let page: ProjectProductMgmtIIPage;

  beforeEach(() => {
    page = new ProjectProductMgmtIIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
