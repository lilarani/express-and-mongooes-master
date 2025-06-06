## 🔷 What is Routing in Express? (Routing মানে কী?)

Routing মানে হলো:

"Client (যেমন Browser বা App) যখন কোনো নির্দিষ্ট URL-এ অনুরোধ (Request) পাঠায়,
তখন Server কোন ফাংশনটি চালাবে তা ঠিক করা।"

## 🧠 সহজ ভাষায়:

কে কোন রাস্তায় আসছে, তাকে তুমি কী দেবে — সেটাই Routing!

## 🔹 Express Route এর ফর্মেট:

```js
app.METHOD(PATH, HANDLER);
```

| অংশ       | ব্যাখ্যা                                        |
| --------- | ----------------------------------------------- |
| `app`     | Express অ্যাপ                                   |
| `METHOD`  | HTTP Method: GET, POST, PUT, DELETE             |
| `PATH`    | ইউআরএল (যেমন `/home`, `/user/:id`)              |
| `HANDLER` | Callback ফাংশন (request, response নিয়ে কাজ করে) |

## 🟢 Basic Routing Example in Express

```js
const express = require('express');
const app = express();

// GET রিকোয়েস্টের জন্য রাউট
app.get('/', (req, res) => {
  res.send('হোম পেজে স্বাগতম!');
});

// আরেকটি রাউট: /about
app.get('/about', (req, res) => {
  res.send('আমাদের সম্পর্কে');
});

// সার্ভার চালু
app.listen(3000, () => {
  console.log('সার্ভার চলছে http://localhost:3000');
});
```

## 🔸 Route Types:

1. GET Route – ডেটা নেওয়ার জন্য

```js
app.get('/users', (req, res) => {
  res.send('সব ইউজার');
});
```

2. POST Route – নতুন ডেটা পাঠাতে

```js
app.post('/users', (req, res) => {
  res.send('নতুন ইউজার যোগ করা হলো');
});
```

3. Route with Params

```js
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  res.send(`ইউজার আইডি: ${id}`);
});
```

URL: `http://localhost:3000/users/5`

Output: `ইউজার আইডি: 5`

## 🔸 Query Routing (সার্চ/ফিল্টার)

```js
app.get('/search', (req, res) => {
  const keyword = req.query.q;
  res.send(`তুমি সার্চ করছো: ${keyword}`);
});
```

URL: `http://localhost:3000/search?q=book`

Output: `তুমি সার্চ করছো: book`
