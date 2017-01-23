var path = require('path');

var hello = "Hello World from Node.js";

var justNode = hello.slice(17);

// console.log(global.hello); // it doesn`t work

console.log(hello);

// or

global.console.log(hello + ' again');

// or

console.log(`I say: ${hello}`);

// or

console.log(`Rock on world from ${justNode}.`);

console.log(__dirname); // full path to the current directory where this module is located

console.log(__filename); // full path to the current file as well as this file`s name

// or with path module

console.log(`Rock on world from ${path.basename(__filename)}.`);