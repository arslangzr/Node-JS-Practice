const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
        // Send an HTTP request
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

//Exporting logger class
module.exports = Logger;


//Exporting modules
// module.exports.log = log;
// module.exports.endPoint = url;
// console.log(module);