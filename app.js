// Loading a module
// The best practice is to import other file as "const"
const logger = require('./logger');

console.log("File name = " , __filename, "\nDirectory Name = " , __dirname,"\n");

//Verifying that module is loaded
console.log(logger);

//Passing message in function loaded from module
logger.log("message");


// function sayHello(name) {
//     console.log("Hello " + name);
// }

// // sayHello("Arslan");
// console.log(module);