## simple logger app

এই প্রোজেক্টটি একটি সাধারণ Node.js স্ক্রিপ্ট, যা কমান্ড লাইন থেকে ইনপুট নিয়ে,
সেই মেসেজের সাথে তারিখ ও সময় যুক্ত করে `log.txt` ফাইলে সংরক্ষণ করে।

```js
const path = require('path'); const fs = require('fs');

const inputArgu = process.argv.slice(2); console.log(inputArgu);

const text = inputArgu.join(' ').concat('\n');

const timestamp = new Date().toISOString(); console.log(timestamp);

const message = `${text} ${timestamp} \n`; console.log(text);

if (!message) { console.log('Please provide a message to log');
console.log('Example: node index.js hello world!'); process.exit(1); }

const filePath = path.join(\_\_dirname, 'log.txt'); fs.appendFile(filePath,
message, { encoding: 'utf-8' }, () => { console.log('your log added
successfully!'); });

console.log(filePath);
```

## 🔍 কীভাবে কাজ করে

- process.argv দিয়ে ইউজারের ইনপুট নেয়

- new Date().toISOString() দিয়ে বর্তমান সময় নেয়

- ইনপুট + সময় যুক্ত করে একটি মেসেজ তৈরি করে

- fs.appendFile() দিয়ে log.txt ফাইলে সেই মেসেজটি যুক্ত করে
