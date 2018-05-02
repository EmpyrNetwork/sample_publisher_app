/* eslint global-require: "off" */

// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js
//cucumber reports

/*global jasmine */

exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  getPageTimeout: 20000,
  allScriptsTimeout: 15000,
  maxSessions: 1,
  ignoreUncaughtExceptions: true,
  multiCapabilities: [
    {
      name: 'Chrome (DEV)',
      browserName: 'chrome',
      platform: 'Windows 10',
      version: 'latest',
      //videoUploadOnPass: false,
      //recordScreenshots: false,
      chromeOptions: {
       args: ['no-sandbox', '--window-size=1600,1200']
      },
      specs: ['./e2e/features/*.feature']
    }
  ],
  directConnect: true,
  baseUrl: 'http://localhost:4200',
  framework: 'custom',
  SELENIUM_PROMISE_MANAGER: false,
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  resultJsonOutputFile: './coverage/e2e-results.json',
  cucumberOpts: {
    require: [
      './e2e/env.js',
      './e2e/slowtractor.ts',
      './e2e/**/*.steps.ts'
    ],
    format: ['json:./coverage/cucumber.json', 'pretty'],
    tags: []
  },
  onPrepare: function() {
    require('ts-node').register({
      'project': 'e2e/tsconfig.e2e.json'
    });
  }
  // plugins: [{
  //   axe: process.env.INCLUDE_508_TESTS,
  //   package: 'protractor-accessibility-plugin'
  // }]
};
