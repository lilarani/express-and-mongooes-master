# 🔍 Aggregation Stages: `$addFields`, `$out`, `$merge`

## ✅ 1. `$addFields` – Add or Update Fields

The `$addFields` stage is used to add new fields to documents or update existing
ones in the aggregation pipeline.

### 📌 Example:

```js
db.users.aggregate([
  {
    $addFields: {
      fullName: { $concat: ['$firstName', ' ', '$lastName'] },
    },
  },
]);
```

📝 Explanation: Adds a new field `fullName` by joining `firstName` and
`lastName`.

## ✅ 2. $out – Save Results to a New Collection

The `$out` stage writes the final aggregation result to a new collection. If the
collection already exists, it will be replaced.

### 📌 Example:

```js
db.users.aggregate([{ $match: { age: { $gt: 18 } } }, { $out: 'adults' }]);
```

📝 Explanation: Stores users with `age > 18` into a new collection called
`adults`.

⚠️ `$out` replaces the entire collection.

## ✅ 3. `$merge` – Insert or Update Documents in a Collection

The `$merge` stage inserts, updates, or merges documents into a target
collection, offering more flexibility than `$out`.

### 📌 Example:

```js
db.users.aggregate([
  { $match: { city: 'Dhaka' } },
  {
    $merge: {
      into: 'dhaka_users',
      whenMatched: 'merge',
      whenNotMatched: 'insert',
    },
  },
]);
```

📝 Explanation:

- Filters users from `Dhaka`.

If a document with the same `_id` exists in `dhaka_users`, it merges it.

If not, it inserts it as a new document.

## 🧠 Summary Table

| Stage        | Purpose                                               |
| ------------ | ----------------------------------------------------- |
| `$addFields` | Adds or modifies fields in the output                 |
| `$out`       | Outputs final result to a new collection (overwrites) |
| `$merge`     | Inserts or updates documents in a target collection   |
