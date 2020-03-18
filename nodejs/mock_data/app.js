const string_format_conf = require('./conf/string_format_conf');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require("./log/log_conf");
const log4js = require('log4js');
const app = express();

app.listen(8888,'127.0.0.1');

app.use(log4js.connectLogger(log4js.getLogger("logFile"), {level: 'auto'}));
app.use(bodyParser.json());

app.use(function (request, response, next) {
    let url = request.url;
    logger.info('url:{0} start'.format(url));
    next();
});

app.use('/prospect',require('./routes/prospect_route'));


app.use(function (request, response, next) {
    let url = request.url;
    logger.info('url:{0} end'.format(url));

    response.status(404);
    response.send('Not found');
});
