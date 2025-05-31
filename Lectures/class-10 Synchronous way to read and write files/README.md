সিঙ্ক্রোনাস (Synchronous) ভাবে ফাইল পড়া ও লেখা মানে হলো ফাইল অপারেশন চলাকালীন
পরবর্তী কাজ থেমে থাকবে যতক্ষণ না ফাইল অপারেশন সম্পন্ন হয়।

## 📘 Synchronous File System Syntax (Node.js)

```js
fs.writeFileSync(path, data, options);
```

# Example:

```js
const fs = require('fs');

console.log('Task1');

const text = 'Learning File System';
fs.writeFileSync('./text.txt', text);

console.log('Task3');

const data = fs.readFileSync('./text.txt', { encoding: 'utf-8' });

console.log('task4');

console.log(data);
```

# 🔍 ব্যাখ্যা:

1. fs.writeFileSync() দিয়ে text.txt ফাইলে লেখা হচ্ছে।

2. fs.readFileSync() দিয়ে সেই ফাইলটি পড়া হচ্ছে।

3. এটি সিঙ্ক্রোনাস হওয়ায় প্রতিটি ধাপ একের পর এক সম্পন্ন হচ্ছে।

## ⚠️ সতর্কতা:

সিঙ্ক্রোনাস অপারেশনগুলো মূলত ব্লকিং হয় — মানে বড় ফাইলের ক্ষেত্রে অ্যাপ্লিকেশন
হ্যাং করে যেতে পারে। তাই সাধারণত অ্যাসিনক্রোনাস (asynchronous) অপশন ব্যবহার করার
পরামর্শ দেওয়া হয়।

```

```
