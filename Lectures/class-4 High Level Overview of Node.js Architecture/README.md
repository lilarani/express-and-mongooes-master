## 🏗️ Node.js Architecture

Node.js এর স্থাপত্য তৈরি হয়েছে এমনভাবে, যেন এটি দ্রুত, স্কেলযোগ্য, এবং
non-blocking সার্ভার-সাইড অ্যাপ্লিকেশন তৈরি করতে পারে।

🌐 মূল উপাদানসমূহ: 1️⃣ V8 Engine

- Google-এর তৈরি JavaScript Engine (Chrome-এ ব্যবহৃত হয়)।

- JavaScript কোডকে মেশিন কোডে রূপান্তর করে দ্রুত রান করায়।

2️⃣ Event Loop

- Node.js এর মুখ্য জাদু এখানেই।

- এটি সব asynchronous কাজ (যেমন ফাইল পড়া, API call) একটার পর একটা non-blocking
  ভাবে পরিচালনা করে।

3️⃣ libuv

- C/C++ দিয়ে লেখা লাইব্রেরি।

- Event Loop পরিচালনা করে এবং OS-এর সাথে I/O কাজগুলোর জন্য যোগাযোগ করে।

4️⃣ Callback Queue

- সব কাজের callback (যেমন API response পেলে যা হবে) এখানে জমা হয়।

- Event Loop এখান থেকে এক এক করে callback নেয় এবং চালায়।

5️⃣ Thread Pool

- কিছু ভারি কাজ (যেমন file system access, DNS lookup) এক বা একাধিক background
  thread দিয়ে পরিচালিত হয় — মূল Thread আটকে যায় না।

# ⚙️ কিভাবে Node.js কাজ করে ধাপে ধাপে: ইউজার অনুরোধ করে (যেমন: ফাইল চাই, ডেটাবেসে

কিছু লেখো)

- Node.js দেখে কাজটা Sync না Async

- Async হলে সেটা libuv-এর মাধ্যমে OS-কে দিয়ে দেয়

- meanwhile Node.js অন্য কাজ করতে থাকে (block হয় না)

- যখন কাজ শেষ হয়, callback Queue-তে callback জমে

- Event Loop callback Queue থেকে callback নিয়ে চালায়

- ফাইনালি ইউজারকে রেসপন্স পাঠায়
