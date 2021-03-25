import { join } from 'path';
import { AndroidCapabilities } from '../../typings/android-typings';
export const PLATFORM_VERSION = '9';
const platformAppPath = 'platforms/android/app/build/outputs/apk/debug/app-debug.apk';
const flowAppPath = 'apps/app-debug.apk';

const whiteLabelPackage = 'uk.flow.white.label';
const flowAppPackage = 'uk.co.flowhospitalitytraining.flowzone';
export const DEVICE_NAME = 'emulator-5554';
// export const DEVICE_NAME = '97717a89';
export const LOG_PATH = join(process.cwd(), './wdio-logs');

export const APP = {
  Path: join(process.cwd(), flowAppPath),
  Package: flowAppPackage,
  Activity: '.MainActivity'
};

/**
 * This interface extends from `WebdriverIO.Config` in `@wdio/sync` module, which is
 * `WebDriver.Options` with an omitted `capabilities` field. The capabilities is determined by
 * the "context" of how to wdio is driven.
 *
 * @ref https://github.com/webdriverio/webdriverio/blob/master/docs/Options.md
 * @ref https://webdriver.io/docs/configurationfile.html
 */
interface WDIOConf extends WebdriverIO.Config {
  capabilities: Array<AndroidCapabilities>;
}

export const config: WDIOConf = {
  protocol: 'http',
  hostname: '0.0.0.0',
  port: 4723,
  //
  runner: 'local',
  //
  specs: [
    './appium/tests/specs/**/*.spec.ts',
  ],
  //
  // ============
  // Capabilities
  // ============
  //
  maxInstances: 1,
  //
  outputDir: LOG_PATH,
  //
  bail: 0,
  waitforTimeout: 2000,
  framework: 'jasmine',
  //
  // Options to be passed to Jasmine.
  // See also: https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-jasmine-framework#jasminenodeopts-options
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000,
    stopOnSpecFailure: true
  },
  reporters: ['spec'],
  capabilities: [
    {
      /*
       Below are AppiumGeneralCapabilities members
      */
      automationName: 'UiAutomator2',
      platformName: 'Android',
      platformVersion: PLATFORM_VERSION,
      deviceName: DEVICE_NAME,
      app: APP.Path,
      browserName: '',
      newCommandTimeout: 240,
      orientation: 'PORTRAIT',
      autoWebview: true,
      noReset: true,
      /*
       Below are AndroidCapabilities members
      */
      systemPort: 8201,
      autoGrantPermissions: true,
      noSign: true,
      appPackage: APP.Package,
      appActivity: APP.Activity,
      appWaitPackage: APP.Package,
      appWaitActivity: APP.Activity,
      autoWebviewTimeout: 4000
    }
  ],
};
