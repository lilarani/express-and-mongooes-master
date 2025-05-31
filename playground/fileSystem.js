// synchronous

const fs = require('fs');

// console.log('Task1');

// const text = 'Learning File System';
// fs.writeFileSync('./text.txt', text);

// console.log('Task3');

// const data = fs.readFileSync('./text.txt', { encoding: 'utf-8' });

// console.log('task4');

// console.log(data);

// asynchronous

console.log('Task1');

let text = 'Node js';

// read file
fs.readFile('./text.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log('Something went wrong', err);
    return;
  }
  text = data;
  console.log(text, 'inside callback');

  fs.writeFile('./hello.txt', text, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log('something went wrong', err);
      return;
    }
    console.log('After writing :', data);
  });
});

console.log(text);

console.log('Task3');
