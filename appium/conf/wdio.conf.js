require("ts-node").register({ project: 'appium/conf/tsconfig.wdio.json' });
module.exports = require("./wdio.conf.ts");
