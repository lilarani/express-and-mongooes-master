# `$lookup` Stage — Embedding vs Referencing

| Embedded                 | Referencing               |
| ------------------------ | ------------------------- |
| One-to-One Relationship  | One-to-Many Relationships |
| Frequent Reading Data    | Frequent Writing Data     |
| Small Data Size          | Big Data Size             |
| Reduced Network Overhead | Scalability               |
| Atomic Updates           | Flexibility               |

### Example

```js
db.orders.aggregate([
  {
    $lookup: {
      from: 'test',
      localField: 'userId',
      foreignField: '_id',
      as: 'user',
    },
  },
]);
```

## Explain

এই পাইপলাইনটিতে শুধুমাত্র একটি স্টেজ আছে, আর সেটি হলো `$lookup`।

## `$lookup `স্টেজ

`$lookup` স্টেজটি MongoDB-তে দুটি কালেকশনের মধ্যে JOIN করার মতো কাজ করে। `SQL`
ডেটাবেস `LEFT` `OUTER` `JOIN` এর মতো।

সহজ কথায়, এর কাজ হলো:

1. orders কালেকশনের প্রতিটি ডকুমেন্টকে দেখবে।

2. প্রতিটি orders ডকুমেন্ট থেকে একটি নির্দিষ্ট ফিল্ডের (localField) মান নেবে।
3. সেই মানটি ব্যবহার করে অন্য একটি কালেকশন (from) এর নির্দিষ্ট ফিল্ডের
   (foreignField) সাথে মিল খুঁজবে।

4. যদি কোনো মিল খুঁজে পায়, তাহলে from কালেকশনের মিলে যাওয়া ডকুমেন্ট(গুলি)
   orders ডকুমেন্টের মধ্যে একটি নতুন অ্যারে ফিল্ড (as) হিসেবে যোগ করবে।

## Summary

- **Referencing** links collections using IDs — good for large, growing
  datasets.
- `$lookup` fetches **related data** across collections, similar to SQL JOIN.
- Keeps documents normalized and **reduces duplication**.
