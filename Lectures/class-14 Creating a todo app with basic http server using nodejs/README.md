# 1️⃣

```js
const http = require('http');
```

👉 এটি Node.js এর built-in http মডিউল কে ইনপোর্ট করছে, যেটা দিয়ে আমরা সার্ভার
বানাতে পারি।

# 2️⃣

```js
const server = http.createServer((req, res) => {
  console.log(req, res);
  res.end('Welcome to ToDo server');
});
```

👉 এখানে আমরা createServer() দিয়ে একটি সার্ভার তৈরি করছি।

- এই ফাংশনের মধ্যে (req, res) হল দুইটি অবজেক্ট:

  - req → ইউজারের অনুরোধ (request)

  - res → সার্ভার যেটা রেসপন্স দিবে (response)

- console.log(req, res) → প্রতি অনুরোধে request ও response অবজেক্ট কনসোলে দেখা
  যাবে

- res.end('Welcome to ToDo server') → রেসপন্স হিসেবে ক্লায়েন্টকে একটি মেসেজ
  পাঠানো হচ্ছে

# 3️⃣

```js
server.listen(5000, '127.0.0.1', () => {
  console.log('A server listening to post 5000');
});
```

👉 এই অংশে সার্ভারটি চালু করা হচ্ছে।

- 5000 → এই পোর্টে সার্ভারটি চলে

- '127.0.0.1' → লোকালহোস্ট (localhost), অর্থাৎ নিজের কম্পিউটার

- কলব্যাক ফাংশনটি শুধু দেখায় — সার্ভার চালু হয়েছে কিনা

# ✅ সারাংশ (Summary):

| অংশ                   | কাজ                               |
| --------------------- | --------------------------------- |
| `http.createServer()` | নতুন HTTP সার্ভার তৈরি করে        |
| `req`                 | ইউজারের অনুরোধ তথ্য               |
| `res.end()`           | ক্লায়েন্টকে রেসপন্স পাঠায়         |
| `server.listen()`     | সার্ভার চালু করে নির্দিষ্ট পোর্টে |
