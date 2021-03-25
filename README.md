This project should use a global appium install
and also appium-doctor is installed global
Path: platforms\android
        Package: uk.co.flowhospitalitytraining.flowzone
        Name: Flow_Training
        Activity: MainActivity
        Android target: android-29



ANDROID_SDK_ROOT=C:\Users\RBento\AppData\Local\Android\Sdk (recommended setting)
ANDROID_HOME=C:\Users\RBento\AppData\Local\Android\Sdk (DEPRECATED)
Using Android SDK: C:\Users\RBento\AppData\Local\Android\Sdk
Reading build config file: C:\Users\RBento\Documents\GitHub\mobile_app_pgb\build.json
Reading the keystore from: C:\Users\RBento\Documents\GitHub\mobile_app_pgb\flowzone_keystore.keystore
Using apk: C:\Users\RBento\Documents\GitHub\mobile_app_pgb\platforms\android\app\build\outputs\apk\debug\app-debug.apk
Package name: uk.co.flowhospitalitytraining.flowzone



[![CircleCI](https://circleci.com/gh/salesforce/karma-android-hybrid-app-launcher.svg?style=svg&circle-token=48522467c992ac593a68f8ed6bcb0424786f2d2a)](https://circleci.com/gh/salesforce/karma-android-hybrid-app-launcher)

# karma-android-hybrid-app-launcher

> :warning: This is pre-production software and not recommended for production use.

A karma launcher for hybrid apps on Android.

Use this launcher to run karma tests in a webview-based Android app.

## Installation

```sh
npm install -D karma-android-hybrid-app-launcher
```

## Requirements

Android SDK must be installed and the ANDROID_SDK_ROOT environment variable must be pointing to the Android SDK location. Also, the emulator image must be present. You can specify your own sdk image string in the config. If you do not specify it uses the default sdk image string of `system-images;android-29;google_apis;x86_64`.

## Manual Cleanup

This plugin will leave an emulator on your system named "karma-android-hybrid-app-emulator" (unless your config sets the "configEmulatorName" field). It will re-use this emulator on re-runs. It is up to the developer to manually delete this emulator if cleanup is desired.

## Usage

Update your karma config to use this plugin and set it as a "browser", and also provide a config object with the hybrid native test app name and apk path.

```js
    browsers: ["AndroidHybridApp"],

    plugins: ["karma-android-hybrid-app-launcher", /* other plugins here */],

    androidHybridApp: {
      packageId: "com.foo.hybridtestapp",
      apkPath: path.resolve("./android-test-app/app-debug.apk"),
    },
```

An [example karma config](./example/karma.conf.js) is in this repo.

## Android Hybrid App Requirements

This launcher uses appium to launch the app with the `android.intent.action.VIEW` action and passes the karma server URL in as a data uri. However, before passing the URL in the launcher swaps in the android loopback IP instead of localhost (Android emulators can't reach host machine using `localhost` but can reach the host machine using `10.0.2.2`).

You must make sure your Android manifest has an entry to handle the `10.0.2.2` karma URI. To do so add the following to the AndroidManifest.xml under the existing `<intent-filter>`:

```xml
<intent-filter android:label="@string/app_name">
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="http"
      android:host="10.0.2.2"
      android:port="9876"
      android:pathPrefix="/" />
</intent-filter>
```

You can see the [test app manifest](./example/android-test-app/app/src/main/AndroidManifest.xml) as an example.

## Debugging Karma Tests

If you want to be able to tap the "DEBUG" button on the karma test page that runs in the webview and have it load that debug page inside the webview (instead of opening in the browser) you'll need to set the `webViewClient`, see [the example android app](./example/android-test-app/app/src/main/java/com/foo/hybridtestapp/MainActivity.kt#L28).

Note that when you open the debug page the original karma (non-debug) page will navigate away so the karma runner will think it's disconnected from the original page and console output will show errors, but if you attach a remote debugger to your webview you will see that the debug page does actually run the karma tests. Auto watch won't work but in the debug tools you can just refresh the page after updating your tests.

## Contributing

See the [CONTRIBUTING doc](./CONTRIBUTING.md).

### Running the tests

```sh
npm run test
```

### Debugging

There is a vs code debug profile for debugging the karma test. Just press `F5` in vs code.

### Installing Android SDK

If Android SDK is not installed on your machine and you like to run karma then run `./setupAndroidSDK` shell script. The script will attempt to install Android SDK using `brew`, set temporary environment variables, and also download necessary Android emulator files.
