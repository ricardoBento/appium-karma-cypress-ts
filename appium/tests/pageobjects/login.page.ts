import ActionHelper from '../helpers/ActionHelpers';

class LoginPage {
  email = 'ricardo@flowhospitalitytraining.co.uk';
  pass = 'Rwbento123';
  get username(): WebdriverIO.Element {
    return $('#email-input') as any;
  }
  get password(): WebdriverIO.Element {
    return $('#password-input') as any;
  }
  get submit(): WebdriverIO.Element {
    return $('#submit') as any;
  }
  get hideButton(): WebdriverIO.Element {
    return $('#showHideButton') as any;
  }
  loginWithCredentials(email, password) {
    this.username.setValue(email);
    this.password.setValue(password);
    // ActionHelper.click(this.submit);
  }
  launchApp() {
    ActionHelper.launchApp();
    ActionHelper.switchToNativeContext();
    ActionHelper.pause(10);
  }
}
export default new LoginPage();


