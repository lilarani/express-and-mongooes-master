## 📚 Node.js এ Routing কি?

Routing হলো সার্ভারে ক্লায়েন্ট থেকে আসা বিভিন্ন URL (বা পথ) এবং HTTP মেথড (GET,
POST, ইত্যাদি) এর উপর ভিত্তি করে নির্দিষ্ট কোড বা ফাংশন চালানো। অর্থাৎ, ইউজার
কোন ঠিকানায় কি রিকোয়েস্ট পাঠিয়েছে সেটার ভিত্তিতে সার্ভার ঠিক কী করবে তা
নির্ধারণ করা।

## 🚦 কেন Routing দরকার?

- যখন অনেক ধরনের পেইজ বা API থাকে (যেমন: হোমপেজ, ইউজার ডাটা, লগইন ফাংশন) তখন
  সার্ভারকে বুঝতে হবে কোন ইউআরএল আসলে কোন কাজ করতে হবে।

- তাই রাউটিং দিয়ে নির্ধারণ করা হয় /home গেলে কি হবে, /todos গেলে কি হবে ইত্যাদি।

## 🛠️ Node.js এ Routing কিভাবে করা হয়?

Node.js এর built-in http মডিউল দিয়ে রাউটিং করার জন্য তুমি মূলত ২টা ব্যাপার চেক
করবে:

- URL - req.url দেখে বুঝবে কোন পেজ বা এন্ডপয়েন্ট ডাকা হয়েছে

- HTTP মেথড - req.method দেখে বুঝবে GET, POST, PUT, DELETE ইত্যাদি কোন মেথড আসছে

## ✍️ Routing এর উদাহরণ

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Welcome to Home Page');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.end('About Us Page');
  } else if (req.url === '/todos' && req.method === 'GET') {
    res.end('List of all ToDos');
  } else if (req.url === '/todos/create' && req.method === 'POST') {
    res.end('Create new ToDo');
  } else {
    res.statusCode = 404;
    res.end('Route not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

# 💡 ব্যাখ্যা:

- `req.url` — ইউজার কোন ইউআরএল/পাথ কল করেছে

- `req.method` — ইউজার কোন HTTP মেথড ব্যবহার করেছে (GET, POST, ইত্যাদি)

- শর্ত দিয়ে চেক করা হয়: -যদি ইউআরএল / এবং মেথড GET হয়, তাহলে হোম পেজ দেখাবে

  - অন্য /about পেজের জন্য আলাদা রেসপন্স দেয়

  - /todos GET হলে তালিকা দেখাবে

  - /todos/create POST হলে নতুন ToDo তৈরি করার রেসপন্স দিবে

- যেকোনো অন্য অনুরোধ এলে ৪০৪ এরর এবং ‘Route not found’ রেসপন্স

## 📝 সারাংশ

| Routing অংশ           | কাজ                                              |
| --------------------- | ------------------------------------------------ |
| `req.url`             | ইউজারের পাঠানো URL বুঝতে                         |
| `req.method`          | HTTP মেথড চেক করতে                               |
| `if...else` বা switch | কোন URL ও মেথড এ কি কাজ হবে সেটার সিদ্ধান্ত নিতে |
| `res.end()`           | রেসপন্স পাঠিয়ে কাজ শেষ করতে                      |
