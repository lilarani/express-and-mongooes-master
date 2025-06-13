# 📘 Aggregation Stages: `$match` and `$project`

## ✅ `$match` – Filter Data

The `$match` stage is used to filter documents in the pipeline. It works
similarly to a `find()` query, but is used within the aggregation pipeline.

```js
db.users.aggregate([{ $match: { age: { $gt: 20 } } }]);
```

🔍 This filters and includes only documents where the `age` is greater than 20.

## ✅ $project – Reshape Data

The `$project` stage is used to specify or reshape which fields to include or
exclude in the output.

📌 Example:

```js
db.test.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      id: 0,
    },
  },
]);
```

🔍 This includes only the `name` and `age` fields in the result, and excludes
`_id`.

## ✅ Combined Example:

```js
db.test.aggregate([
  {$match: {city: "Dhaka"}},
  {
    $project: {
      name: 1,
      age: 1
      _id: 0
    }
  }
])
```

🔎 Explanation:

- `$match` filters users who live in Dhaka.

- `$project` limits the output to show only `name `and `city` fields.

## 📝 Summary

| Stage      | Purpose                            |
| ---------- | ---------------------------------- |
| `$match`   | Filters documents by condition     |
| `$project` | Selects specific fields for output |
