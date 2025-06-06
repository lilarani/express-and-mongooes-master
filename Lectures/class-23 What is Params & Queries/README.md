## ✅ ১. Params (Route Parameters) – রাউট প্যারামিটার

Params মানে হলো URL এর ভেতরে থাকা ডায়নামিক অংশ, যেটা রাউটের অংশ হয়।

🟢 উদাহরণ:

```js
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`ইউজার আইডি: ${userId}`);
});
```

এখানে /user/:id হচ্ছে রাউট, যেখানে :id হলো param।

🔗 যদি কেউ এই URL-এ যায়:

```bash
http://localhost:3000/user/123
```

👉 তাহলে req.params.id হবে 123

📌 ব্যবহার হয়:

- ইউজার আইডি, পোস্ট আইডি ইত্যাদি URL এর মধ্যে ডায়নামিক ভাবে পাঠাতে

## ✅ ২. Query Parameters – কোয়েরি প্যারামিটার

Query parameters থাকে URL এর শেষে ? এর পর। এগুলো search/filter বা extra info
পাঠাতে ব্যবহৃত হয়।

🟢 উদাহরণ:

```js
app.get('/search', (req, res) => {
  const keyword = req.query.q;
  res.send(`তুমি সার্চ করছো: ${keyword}`);
});
```

🔗 যদি URL হয়:

```bash
http://localhost:3000/search?q=gyanflow
```

👉 তাহলে req.query.q হবে "gyanflow"

📌 ব্যবহার হয়:

- সার্চ, ফিল্টার, পেজিনেশন, সোর্টিং ইত্যাদির জন্য

## 🔍 সংক্ষেপে পার্থক্য (Comparison):

| বিষয়    | Params (`req.params`)       | Query (`req.query`)   |
| ------- | --------------------------- | --------------------- |
| অবস্থান | URL রাউটের অংশ              | URL এর শেষে `?` এর পর |
| রাউট    | `/user/:id`                 | `/search?q=abc`       |
| এক্সেস  | `req.params.id`             | `req.query.q`         |
| কাজ     | স্পেসিফিক আইটেম (user/post) | ফিল্টার, সার্চ, অপশন  |
