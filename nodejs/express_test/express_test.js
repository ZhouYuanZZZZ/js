let express = require('express');
let app = new express();

function test0() {
    app.get('/test0', function (request, response) {
        response.send('OK');
    });

}

function test1() {
    app.get('/test1/:aid', function (request, response) {
        //获取动态路由传值
        console.log(request.params);
        response.send(request.params);
    });
}

function test2() {
    app.get('/test2', function (request, response) {
        console.log(request.query);
    });
}

//路由中间件
function test3() {

    app.use(function (request, response, next) {
        console.log('所有路由过滤器');

        //过滤器链下一步
        next();
    });

    app.get('/test3', function (request, response, next) {
        console.log('test3-1');
        next();
    });

    app.get('/test3', function (request, response, next) {
        console.log('test3-2');
        next();
    });

    app.get('/test3', function (request, response, next) {
        console.log('test3-3');
    });
}

function test4(){

    app.use(function (request, response, next) {
        console.log('前置处理器');
        next();
    });

    app.get('/test4', function (request, response, next) {
        console.log('test4');
    });

    app.use(function (request, response, next) {
        console.log('后置处理器');
        response.status(404);
        response.send('未匹配的路径');
    });
}

function test5(){
}

app.listen(8888, '127.0.0.1');

test4();