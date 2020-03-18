let log4js = require('log4js');

let conf = {
    appenders: {
        out: {type: 'console'},
        app: {
            type: "dateFile",
            filename: 'log/log.log',
            pattern: "_yyyy-MM-dd",
            alwaysIncludePattern: true,
        }
    },
    categories: {
        default: {appenders: ['out','app'], level: 'info'},
        logFile: {appenders: ['out', 'app'], level: 'ALL'},
    },
};

log4js.configure(conf);

let fileLog = log4js.getLogger('logFile');

module.exports = fileLog;