// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
module.exports = function (config) {
  // const flowAppTest = require('path').join(__dirname, 'cordova-app/**/*spec.js');
  // const flowAppTest = require('path').join(__dirname, 'cordova-app/**/*spec.ts');
  // C:\Users\RBento\Documents\GitHub\appium-karma-cypress-ts\cordova-app\karma-test.ts
  const flowAppTest = 'cordova-app/karma-test.spec.ts';
  const indexjs = 'cordova-app/index.js';
  const srcjs = 'karma/src/**.js';
  const teststs = 'karma/test/**/*.ts';
  const srcts = 'karma/src/**/*.ts';
  config.set({
    frameworks: ['jasmine', 'webpack'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-spec-reporter')
    ],
    files: [
      flowAppTest,
      indexjs,
      srcjs,
      {
        pattern: srcts,
        type: 'js'
      },
      {
        pattern: teststs,
        type: 'js'
      },
    ],
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    preprocessors: {
      [flowAppTest]: ['webpack'],
      [indexjs]: ['webpack'],
      [srcjs]: ['webpack'],
      [srcts]: ['webpack'],
      [teststs]: ['webpack'],
    },
    client: {
      jasmine: {},
      clearContext: true
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/ngv'),
      reporters: [{
          type: 'html'
        },
        {
          type: 'text-summary'
        }
      ]
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    webpack: {
      module: {
        rules: [{
          test: /\.js$/i,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }]
      }
    },
    webpackMiddleware: {
      //turn off webpack bash output when run the tests
      noInfo: true,
      stats: 'errors-only'
    },
  });
};
