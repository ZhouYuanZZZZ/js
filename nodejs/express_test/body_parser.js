let express = require('express');
let bodyParser = require('body-parser');

let app = new express();

//配置body-parser中间件
//parse application/x-www-form-urlencode
app.use(bodyParser.urlencoded({extended: false}));

//parse application/json
app.use(bodyParser.json());

app.use(function (req,res,next) {
    res.setHeader('Content-Type','application/json');
    console.log('set content type');

    next();
});

app.post('/test_body',function (req,res) {
    res.send(req.body);
});

app.listen(8888,'127.0.0.1');