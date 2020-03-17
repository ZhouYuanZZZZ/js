function test0() {

    var http = require('http');
    var server = http.createServer(function (request, response) {
        response.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
        response.end("wdm");
    });
    server.listen(8080)
}

function test1() {

    var url = require('url');
    urlParse = url.parse('http://www.baidu.com?a=1&b=2',true);
    console.log(urlParse);
}

test1();