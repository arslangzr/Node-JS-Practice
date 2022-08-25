const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var usedMemory = totalMemory - freeMemory;
// console.log("Total Memory = ",totalMemory,"\nFree Memory = ",freeMemory,"\nUsed Memory = ",usedMemory);

// Template String
// ES6 / ES2015 : ECMAScript 6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`Used Memory: ${totalMemory-freeMemory}`);