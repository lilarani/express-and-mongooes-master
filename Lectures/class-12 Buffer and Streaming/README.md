## 📦 Buffer (বাফার) কী?

Buffer হলো এক ধরনের অস্থায়ী মেমোরি জায়গা, যেখানে ডেটা আপাতত জমিয়ে রাখা হয় যেন
পরে সেটা একসাথে প্রসেস করা যায়।

🧠 উদাহরণ:

- ধরো তুমি একবারে অনেক বড় একটা PDF ফাইল খুলতে চাও।

- পুরো ফাইলটা আগে পুরোপুরি RAM-এ জমে (buffer), তারপর পড়া শুরু হয়।

🔹 Buffer-এর বৈশিষ্ট্য:

| বিষয়                 | মানে                             |
| -------------------- | -------------------------------- |
| ডেটা একবারে আসে      | পুরো ফাইল একসাথে লোড হয়          |
| মেমোরি বেশি লাগে     | কারণ পুরো ফাইল RAM-এ জমে         |
| ধীরে কাজ শুরু হয়     | কিন্তু পরে smooth চলে            |
| ছোট ফাইলের জন্য ভালো | যেমন config.json বা settings.txt |

# ✅ Buffer:

```js
const fs = require('fs');

const data = fs.readFileSync('hello.txt', 'utf-8'); // পুরো ফাইল একবারে পড়ে
console.log(data);
```

## 🌊 Stream (স্ট্রিম) কী?

Stream হলো একটা ধারাবাহিক (continuous) উপায়ে ডেটা প্রসেস করার সিস্টেম। ডেটা ছোট
ছোট টুকরা (chunk) করে আসে এবং প্রতিটি chunk সাথে সাথেই প্রসেস করা হয়।

🧠 উদাহরণ:

- YouTube বা Netflix এ তুমি ভিডিও দেখতে পারো download শেষ না করেই।

- কারণ ভিডিও stream আকারে আসে, মানে একটু একটু করে।

🔹 Stream-এর বৈশিষ্ট্য:

| বিষয়                 | মানে                         |
| -------------------- | ---------------------------- |
| ডেটা অংশ অংশ করে আসে | chunk by chunk               |
| মেমোরি কম লাগে       | কারণ একসাথে সব আসে না        |
| দ্রুত কাজ শুরু হয়    | যতটুকু আসে, ততটুকু প্রসেস হয় |
| বড় ফাইলের জন্য দারুন | যেমন ভিডিও, অডিও, বড় ডেটাসেট |

# ✅ Stream:

```js
const fs = require('fs');

const readStream = fs.createReadStream('hello.txt', { encoding: 'utf-8' });

readStream.on('data', chunk => {
  console.log('Chunk received:', chunk);
});
```

## 🔁 Buffer vs Stream তুলনা টেবিল

| বিষয়            | Buffer                | Stream                         |
| --------------- | --------------------- | ------------------------------ |
| ডেটা আসে        | একবারে সব ডেটা আসে    | একটানা টুকরা টুকরা করে আসে     |
| মেমোরি ব্যাবহার | অনেক বেশি (RAM এ জমে) | কম (chunk প্রসেস হয় সাথে সাথে) |
| দ্রুততা         | শুরুতে ধীরে           | সাথে সাথেই শুরু করা যায়        |
| ফাইলের আকার     | ছোট ফাইলের জন্য ভালো  | বড় ফাইলের জন্য উপযুক্ত         |

## Different types of streams

1. Readable Stream - a stream where we can read data (ex.http req,
   fs.readStream)

2. Writable Stream - a stream where we can write data (ex. http response fs,
   writeStream)

3. Duplex stream - a stream for both write and read

4. Transform stream - a stream where can we reshape data

## ✅ কখন Buffer ব্যবহার করবে?

- ছোট ফাইল বা একবারে প্রসেস করতে চাও এমন ডেটার জন্য।

- যেমন: config ফাইল, JSON, text ফাইল।

## ✅ কখন Stream ব্যবহার করবে?

- বড় ফাইল, ভিডিও, অডিও, বা বড় ডেটা ট্রান্সফার করতে চাইলে।

- যেমন: video player, file uploader/downloader, log reader ইত্যাদি।

## File Stream Example in Node.js

This Node.js project demonstrates how to use **readable** and **writable**
streams to transfer data from one file to another using the built-in `fs` (File
System) module.

---

## 📁 Files Used

- `hello.txt` — Source file from which content is read.
- `text.txt` — Destination file to which content is written.

---

## 🧠 What the Code Does

1. **Reads** content from `hello.txt` using `fs.createReadStream`.
2. **Writes** the content to `text.txt` using `fs.createWriteStream`.
3. Handles errors during reading or writing.
4. Logs status messages for progress tracking.

---

## 🧾 Code Summary

```js
const fs = require('fs');

// Create a readable stream from hello.txt
const readStream = fs.createReadStream('./hello.txt', { encoding: 'utf-8' });

// Create a writable stream to text.txt
const writeStream = fs.createWriteStream('./text.txt', { encoding: 'utf-8' });

// On receiving data from read stream
readStream.on('data', data => {
  console.log(data);

  // Write the received chunk into write stream
  writeStream.write(data, err => {
    if (err) throw Error('Error', err);
  });
});

// Handle read stream error
readStream.on('error', err => {
  if (err) throw Error('Error', err);
});

// Handle write stream error
writeStream.on('error', err => {
  if (err) throw Error('Error', err);
});

// When reading ends
readStream.on('end', () => {
  console.log('reading ended');
  writeStream.end(); // Close the write stream
});

// When writing finishes
writeStream.on('finish', () => {
  console.log('written successfully!');
});
```
