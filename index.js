// console.log("Hello World");
const add = require('./add')
const difference = require('./difference')
const os = require('os');
const fs = require('fs');

console.log(fs.readFileSync('./files/first.txt', 'utf8'));
fs.writeFileSync('./files/second.txt', 'this is a second file')
console.log(os.userInfo());

console.log(add(2,3));
console.log(difference(2,4));