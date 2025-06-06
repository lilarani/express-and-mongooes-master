Express অ্যাপে সব Route বা Middleware শেষ হওয়ার পর যদি কোনো Match না পাওয়া
যায়, তাহলে সেটা 404. আর যদি কোডে কোনো error হয় (try/catch দিয়ে ধরা যায়), তাহলে
সেটা global error handler দিয়ে handle করতে হয়।

## ⚠️ 1. Handle 404 Errors (Not Found)

```ts
// সব Route এর পরে লিখো
app.use((req, res, next) => {
  res.status(404).json({ message: '🔍 Route not found' });
});
```

🔹 যদি কোনো Route না মেলে, এই middleware ট্রিগার হবে।

## 🧯 2. Global Error Handler Middleware

```ts
import { Request, Response, NextFunction } from 'express';

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('❌ Error:', err.stack);
  res
    .status(500)
    .json({ message: '🚨 Internal Server Error', error: err.message });
});
```

🧠 এই middleware সবশেষে রাখতে হয়, কারণ এটি সব errors ধরে।

## 🧪 Example: Error Throw করা

```ts
app.get('/cause-error', (req, res) => {
  throw new Error('Something went wrong!');
});
```

এটি তে Error হলে Global Error Handler চালু হবে।

## 🔄 Full Example

```ts
import express, { Request, Response, NextFunction } from 'express';

const app = express();

// ✅ Routes
app.get('/', (req, res) => {
  res.send('✅ API is running');
});

// ❌ Example Error Route
app.get('/error', (req, res) => {
  throw new Error('🔥 Custom Error!');
});

// ❓ 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: '🔍 Route not found' });
});

// 🛠️ Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('❌ Global Error:', err.message);
  res
    .status(500)
    .json({ message: '🚨 Internal Server Error', error: err.message });
});

app.listen(5000, () => console.log('🚀 Server running on port 5000'));
```

## ✅ Best Practices

| কাজ                | টিপস                                                    |
| ------------------ | ------------------------------------------------------- |
| 404 handler        | সব রাউটের পরে রাখতে হবে                                 |
| Error handler      | সবশেষে রাখতে হবে, ৪টা আর্গুমেন্ট সহ                     |
| Custom Error Class | চাইলে `AppError` নাম দিয়ে নিজের Error বানাতে পারো       |
| Async Error        | `express-async-handler` ইউজ করলে async error ধরা সহজ হয় |
