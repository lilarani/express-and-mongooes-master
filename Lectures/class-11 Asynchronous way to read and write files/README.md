## 🌀 অ্যাসিনক্রোনাস (Asynchronous) ফাইল অপারেশন

অ্যাসিনক্রোনাস অপারেশন মানে কাজটি শুরু হওয়ার পরপরই পরবর্তী কাজ চালিয়ে যায়। যখন
কাজটি (যেমন ফাইল লেখা বা পড়া) শেষ হয়, তখন একটি callback ফাংশনের মাধ্যমে জানিয়ে
দেয়।

## syntax --> Write File Asynchronously

```js
fs.writeFile(path, data, options, callback);
```

# Example:

```js
fs.writeFile('./text.txt', 'Hello Node!', { encoding: 'utf-8' }, err => {
  if (err) {
    console.log('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});
```

## syntax --> Read File Asynchronously

```js
fs.readFile(path, options, callback);
```

```ts
fs.readFile('./text.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

## 🧪 ফুল কোড উদাহরণ:

```ts
const fs = require('fs');

console.log('Task1');

let text = 'Node js';

// Write file asynchronously
fs.writeFile('./text.txt', text, { encoding: 'utf-8' }, err => {
  if (err) {
    console.log('something went wrong', err);
    return;
  }
  console.log('After writing: File written successfully');
});

// Read file asynchronously
fs.readFile('./text.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log('Something went wrong', err);
    return;
  }
  text = data;
  console.log(text, '← inside readFile callback');
});

console.log(text); // This will print 'Node js' before readFile finishes
console.log('Task3');
```

## ⚠️ টিপস:

- Node.js অ্যাসিনক্রোনাসভাবে কাজ করে, তাই readFile এবং writeFile একসাথে কল করলে,
  কে আগে শেষ হবে তা নিশ্চিত না — একে বলে Race Condition।

- বড় বা প্রোডাকশন লেভেলের অ্যাপ্লিকেশনে অ্যাসিনক্রোনাস অপশন ব্যবহার করাই বেস্ট,
  কারণ এটি non-blocking এবং দ্রুত।

- আরও উন্নত ও পড়ার সহজ উপায় হলো 👉 Promise বা async/await ব্যবহার করা। (ES6+)
