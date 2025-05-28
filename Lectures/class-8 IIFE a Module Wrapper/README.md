## 🔄 IIFE (Immediately Invoked Function Expression) কী?

IIFE হলো এমন একটি ফাংশন যেটা ডিক্লেয়ার করার সাথে সাথেই কল (invoke) হয়ে যায়।

```js
(function () {
  console.log('IIFE is running');
})();
```

## 🧩 Node.js এ Module Wrapper Function

Node.js-এ তুমি যখন একটা .js ফাইল লেখো, Node.js আড়ালে ঐ ফাইলের কোডকে একটি IIFE
(function wrapper) এর ভিতরে রেখে চালায়।

এইভাবে:

```js
(function (exports, require, module, __filename, __dirname) {
  // তোমার ফাইলের কোড এখানে চলে
});
```

## 🧠 এই Wrapper কী করে?

এই ফাংশন ৫টি আর্গুমেন্ট দেয় তোমার ফাইলকে:

| আর্গুমেন্ট | কী কাজ করে | | ------------ | --------------------------- | |
`exports` | মডিউল থেকে কী কী বাইরে যাবে | | `require` | অন্য মডিউল আনতে ব্যবহার
হয় | | `module` | পুরো মডিউল সম্পর্কিত তথ্য | | `__filename` | বর্তমান ফাইলের
পুরো path | | `__dirname` | বর্তমান ফোল্ডারের path |

# 🎯 উদাহরণ দিয়ে বোঝা:

```js
// file: greet.js
console.log('Filename:', __filename);
console.log('Directory:', __dirname);

module.exports = 'Hello from Greet Module';
```

এই কোডটি বাস্তবে Node.js যেভাবে execute করে:

```js
(function (exports, require, module, __filename, __dirname) {
  console.log('Filename:', __filename);
  console.log('Directory:', __dirname);

  module.exports = 'Hello from Greet Module';
});
```

# 🔒 কেন এই সিস্টেম ব্যবহার করে?

- Scope Safe: তোমার কোড global scope দূষণ করে না।

- Private Variables: ফাইলের ভেতরে থাকা ভ্যারিয়েবল বাইরে থেকে access করা যায় না।

- Performance: Efficient memory এবং encapsulation ব্যবস্থায় কাজ করে।
