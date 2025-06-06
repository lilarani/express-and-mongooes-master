## 🧠 What is Middleware in Express?

Middleware হল এমন একটা ফাংশন যা Request (req) আর Response (res) এর মাঝখানে চলে।
এটা মূলতঃ HTTP request-এর লাইফসাইকেলের মাঝখানে ঢুকে কোনো কাজ করে, তারপর next()
ফাংশন দিয়ে পরবর্তী middleware বা রাউটে পাঠায়।

## 🔁 Middleware-এর কাজ কি?

1. ✅ Request object চেক/পরিবর্তন করা

2. 🔐 Authentication / Authorization

3. 📝 Logging

4. 📦 Body/Query/Data পার্স করা

5. 🛑 Error handling

6. 🚦 Routing control

## 📌 Middleware Structure

```ts
(req: Request, res: Response, next: NextFunction) => void
```

## 🧪 Example 1: Simple Logger Middleware

```ts
import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next(); // without this, request won't go further
};
```
