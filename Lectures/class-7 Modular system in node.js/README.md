Node.js-এর modular system মানে হলো বড় একটি প্রজেক্টকে ছোট ছোট অংশে ভাগ করে রাখা,
যেনো প্রতিটা অংশ আলাদা ভাবে কাজ করে এবং প্রয়োজন মতো অন্য জায়গায় ব্যবহার করা যায়।
এটাকে সহজভাবে বললে, একটা ফাইল থেকে অন্য ফাইলে কোড এক্সপোর্ট এবং ইম্পোর্ট করার
ব্যবস্থা।

## 🧱 ১. মডিউল কী?

Node.js-এ প্রতিটা .js ফাইলকে একটা মডিউল হিসেবে ধরা হয়। তুমি একটা ফাইলের মধ্যে
কিছু ফাংশন বা ভ্যারিয়েবল তৈরি করে, সেটা অন্য ফাইলে ব্যবহার করতে পারো।

# 📦 ২. module.exports দিয়ে কিছু বাইরে পাঠানো (Export)

```js
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
// বাইরে পাঠানো
module.exports = { add, subtract };
```

এখানে add আর subtract ফাংশন দুটো export করা হয়েছে।

## 📥 ৩. অন্য ফাইলে নিয়ে আসা (Import) require দিয়ে

```js
// app.js

const math = require('./math');

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(5, 3)); // Output: 2
```

এখানে require('./math') দিয়ে math.js ফাইল থেকে সবকিছু নিয়ে আসা হয়েছে।

# 🧠 কেন মডুলার সিস্টেম দরকার?

- বড় প্রজেক্টকে ছোট ছোট অংশে ভাগ করা যায়।

- Reusable কোড লেখা যায় (একবার লিখে বারবার ব্যবহার করা যায়)।

- Maintain করা সহজ হয়।

- টিমে কাজ করলেও সবাই আলাদা অংশে কাজ করতে পারে।

# Modular System

1. local modules(we create)
2. Built in modules (come with node.js)
3. Third party moduels (created by others)
