
const path = require('path');
const fs = require("fs");//fs for file system

console.log(__dirname);

fs.writeFileSync(path.resolve(__dirname, "test.txt"), "Hello from Node.js"); //resolves folder issue