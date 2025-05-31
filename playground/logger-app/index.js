const path = require('path');
const fs = require('fs');

const inputArgu = process.argv.slice(2);
console.log(inputArgu);

const text = inputArgu.join(' ').concat('\n');

const timestamp = new Date().toISOString();
console.log(timestamp);

const message = `${text} ${timestamp} \n`;
console.log(text);

if (!message) {
  console.log('Please provide a message to log');
  console.log('Example: node index.js hello world!');
  process.exit(1);
}

const filePath = path.join(__dirname, 'log.txt');
fs.appendFile(filePath, message, { encoding: 'utf-8' }, () => {
  console.log('your log added successfully!');
});

console.log(filePath);
