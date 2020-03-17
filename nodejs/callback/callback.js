let events = require('events');
let eventEmitter = new events.EventEmitter();

function test0() {

    //监听事件
    eventEmitter.on('eventName',function (data) {
        console.log('event start');
        console.log(data);
    });

    //触发事件
    eventEmitter.emit('eventName','触发了事件');
}

test0();