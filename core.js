var path = require('path');

console.log(path.basename(__filename));

var dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(dirUploads);