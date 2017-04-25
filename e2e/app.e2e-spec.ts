import { AngularModulesExamplePage } from './app.po';

describe('angular-modules-example App', () => {
  let page: AngularModulesExamplePage;

  beforeEach(() => {
    page = new AngularModulesExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
