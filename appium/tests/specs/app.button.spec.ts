import { Element } from '@wdio/sync';
import WebViewScreen, { CONTEXT_REF } from '../helpers/WebView';
import AppPage from '../pageobjects/app.page';

describe('Android', () => {
  let appHomeButton: Element;
  beforeEach(() => {
    WebViewScreen.waitForWebsiteLoaded();
    WebViewScreen.switchToContext(CONTEXT_REF.NATIVE);
    appHomeButton = AppPage.appHomeButton;
    WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);
  });

  it('test 1', () => {
    WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);
    expect(appHomeButton.isDisplayed()).toBe(true);
    expect(appHomeButton.getText()).toBe("Show / hide box");
  });
  it('Hide button', () => {
    WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);
    appHomeButton.click();
  });
  it('Show button', () => {
    WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);
    appHomeButton.click();
  });
});
