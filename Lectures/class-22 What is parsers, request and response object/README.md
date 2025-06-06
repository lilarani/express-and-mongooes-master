## ✅ What is parsers, request and response object

```js
const express = require('express');
const app = express();

// 👉 এটা হচ্ছে parser — express.json() middleware
app.use(express.json());

app.post('/hello', (req, res) => {
  // 👉 Request Object থেকে ডেটা নিচ্ছি
  const name = req.body.name;

  // 👉 Response Object দিয়ে জবাব দিচ্ছি
  res.send(`হ্যালো, ${name}!`);
});

app.listen(3000, () => {
  console.log('Server চলতেছে http://localhost:3000');
});
```

🔍 ব্যাখ্যা

## 🟦 Parser:

```js
app.use(express.json());
```

এখানে express.json() হল parser — এটা কাজ করে JSON ডেটা বোঝার জন্য। তুমি যদি
Postman বা কোনো ফ্রন্টএন্ড থেকে JSON ডেটা পাঠাও:

```json
{
  "name": "Nila"
}
```

এই middleware ছাড়া req.body.name কাজ করত না।

## 🟦 Request Object:

```js
const name = req.body.name;
```

এখানে req (request object) থেকে ইউজার যেটা পাঠিয়েছে সেটা নিচ্ছি। যেমন ধরো, ইউজার
POST রিকোয়েস্টে নাম পাঠায় — req.body এর মাধ্যমে তুমি সেটা access করছো।

## 🟦 Response Object:

```js
res.send(`হ্যালো, ${name}!`);
```

এখানে res (response object) এর মাধ্যমে আমরা ক্লায়েন্টকে একটা জবাব পাঠাচ্ছি —
“হ্যালো, Nila!”
