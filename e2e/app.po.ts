import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/home');
  }

  getParagraphText() {
    return element(by.id('app-title')).getText();
  }
  showMenuAction() {
     element(by.id('MainMenu')).click();
  }
  getMenuParent() {
    return element(by.className('cdk-overlay-container')).getText();
  }
}
