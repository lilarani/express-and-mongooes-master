## 📌 Response Headers কী?

Response headers হল কিছু অতিরিক্ত তথ্য যা সার্ভার ক্লায়েন্টকে (যেমন ব্রাউজার বা
API কল) পাঠায় HTTP রেসপন্সের সাথে। এই হেডারগুলো বলে দেয়:

- রেসপন্সের ধরন (যেমন JSON, HTML, ইমেজ)

- কোন origin থেকে রিকোয়েস্ট এলাউ

- কুকি বা সিকিউরিটির নিয়ম

- ক্যাশিং সম্পর্কিত তথ্য

# 🛠️ কিভাবে সেট করা হয় (Pure Node.js এ):

```js
res.setHeader('header-name', 'value');
```

## 🎯 উদাহরণসহ ব্যাখ্যা:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  // Content type header set করা হচ্ছে
  res.setHeader('Content-Type', 'application/json');

  // CORS allow করার জন্য header set
  res.setHeader('Access-Control-Allow-Origin', '*');

  // রেসপন্স
  res.end(JSON.stringify({ message: 'Hello from Node.js server' }));
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

## ✅ res.writeHead() দিয়ে কিভাবে হেডার সেট করা হয়?

```js
res.writeHead(statusCode, headersObject);
```

এখানে:

- statusCode — HTTP রেসপন্স স্ট্যাটাস (যেমন: 200, 404, 500)

- headersObject — একটি অবজেক্ট, যেখানে key-value pair হিসেবে হেডার দেওয়া হয়

# 🔍 উদাহরণ

```js
res.writeHead(200, {
  'Content-Type': 'application/json',
  // 'email': 'neela@gmail.com' // এটা অপশনাল, কাস্টম হেডার
});

res.end(JSON.stringify({ message: 'Hello from server' }));
```

## 🔁 res.writeHead vs res.setHeader

| বিষয়           | res.writeHead             | res.setHeader                                 |
| -------------- | ------------------------- | --------------------------------------------- |
| কখন চালানো যায় | একবারে সব হেডার একসাথে    | একাধিকবার আলাদা করে                           |
| order matters? | হ্যাঁ, `res.end()` এর আগে | হ্যাঁ, `res.end()` এর আগে                     |
| Status code    | একই লাইনে সেট করা যায়     | আলাদা করে `res.statusCode = 200` দিয়ে করতে হয় |
