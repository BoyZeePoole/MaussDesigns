import { AppPage } from './app.po';

describe('mauss-designs App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Mauss Designs');
  });
  it('should display menu', () => {
    page.showMenuAction();
    expect(page.getMenuParent()).toContain('Home');
  });
});
