# MongoDB Operators: `$all` and `$elemMatch`

## ✅ `$all`

Purpose: Checks if an array contains all the specified values.

###📌 Example:

```js
db.test.find({
  tags: { $all: ['mongodb', 'database'] },
});
```

This query will return documents where the tags array contains both `"mongodb"`
and `"database"`.

###✅ Matching Document Example:

```json
{
  "name": "Neela",
  "tags": ["web", "mongodb", "database"]
}
```

This document matches because both `"mongodb"` and `"database"` are present in
the tags array.

## ✅ $elemMatch

Purpose: Used to match at least one element in an array that satisfies multiple
conditions.

Usually used when the array contains objects.

### 📌 Example:

```js
db.test.find({
  scores: { $elemMatch: { subject: 'Math', score: { $gt: 80 } } },
});
```

This query finds documents where the scores array contains at least one object
that:

- has `"subject"` equal to `"Math"`, and

- `"score"` greater than 80.

### ✅ Matching Document Example:

```json
{
  "name": "Neela",
  "scores": [
    { "subject": "Math", "score": 85 },
    { "subject": "English", "score": 70 }
  ]
}
```

This document matches because the Math score is 85 (> 80).

## 🔍 Summary Comparison

| Operator     | What it does                                          | When to use                                           |
| ------------ | ----------------------------------------------------- | ----------------------------------------------------- |
| `$all`       | Checks if the array contains all the specified values | When working with simple arrays (string, number)      |
| `$elemMatch` | Checks conditions inside objects or nested arrays     | When working with object arrays or complex conditions |

## ✨ In Simple Words:

🔹 $all: You just want to check if certain values exist in an array.

🔹 $elemMatch: You want to check if any object in the array satisfies multiple
conditions at the same time.
