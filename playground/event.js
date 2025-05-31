const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();
schoolBell.on('ring', () => {
  console.log('yahoo!! class sesh!');
});

schoolBell.on('ring', () => {
  console.log('Dhat Arekta class ache!');
});

schoolBell.on('broken', () => {
  console.log('oh no! Class ki ar sesh hbe na!');
});

schoolBell.emit('ring');
schoolBell.emit('broken');
