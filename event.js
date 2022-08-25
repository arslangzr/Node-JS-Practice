const EventEmitter = require('events');
// const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();
// Register a listener
logger.on('messageLogged',(arg) => {
        console.log('Listener Called', arg);
    });
logger.log('message');
// // Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'http://'});