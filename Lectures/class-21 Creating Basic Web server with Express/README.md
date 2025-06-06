# Creating Basic Web server with Express

Express দিয়ে একটা সিম্পল ওয়েব সার্ভার বানানো হয়েছে। শুধু GET রিকোয়েস্ট হ্যান্ডল
করে।

### ১. ফোল্ডার তৈরি

```bash
mkdir my-express-app
cd my-express-app
```

# ২. npm ইনিশিয়াল কর

```bash

npm init -y
```

# ৩. Express ইনস্টল কর

```bash

npm install express
```

# ৪. index.js ফাইলে নিচের কোড

```js
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('হ্যালো! Express কাজ করছে!');
});

app.listen(PORT, () => {
  console.log(`সার্ভার চলছে http://localhost:${PORT}`);
});
```

# ৫. চালাও

```bash
 node index.js
```
