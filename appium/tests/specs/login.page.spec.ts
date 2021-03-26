import LoginPage from '../pageobjects/login.page';
import WebViewScreen, { CONTEXT_REF } from '../helpers/WebView';
import AppPage from '../pageobjects/app.page';
describe('Android', () => {
  let SubmitButton: WebdriverIO.Element;
  let hideButton: WebdriverIO.Element;
  let loginPage;
  const email = 'ricardo@flowhospitalitytraining.co.uk';
  const password = 'Rwbento123'
  beforeEach(() => {
    WebViewScreen.waitForWebsiteLoaded();
    WebViewScreen.switchToContext(CONTEXT_REF.NATIVE);
    SubmitButton = LoginPage.submit;
    hideButton = AppPage.appHomeButton;
    loginPage = LoginPage;
    WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);
  });
  it('test 1', () => {
    loginPage.loginWithCredentials(email, password);
    // hideButton.click();
    loginPage.submit.click();
  });
});
