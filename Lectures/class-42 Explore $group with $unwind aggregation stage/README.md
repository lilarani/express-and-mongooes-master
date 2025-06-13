# What is `$unwind`?

`$unwind` deconstructs an array field from the input documents and outputs a
document for each element in the array.

- If a document has an array field, $unwind will output multiple documents — one
  per array element.

- This is useful to flatten array data before grouping or further processing.

## Why combine `$unwind` with `$group`?

- You use `$unwind` to break down arrays into individual documents.

- Then `$group` to aggregate or summarize those documents.

### Example

Suppose your collection `users` has documents like this:

```json
{
  "_id": 1,
  "name": "Alice",
  "hobbies": ["reading", "cooking", "hiking"]
},
{
  "_id": 2,
  "name": "Bob",
  "hobbies": ["cooking", "traveling"]
}

```

### Goal:

- Find out how many users have each hobby.

### Aggregation pipeline:

```js
db.users.aggregate([
  // 1. Unwind the hobbies array: one doc per hobby per user
  { $unwind: '$hobbies' },

  // 2. Group by hobbies and count users per hobby
  {
    $group: {
      _id: '$hobbies', // group by hobby name
      userCount: { $sum: 1 }, // count number of occurrences (users)
    },
  },

  // 3. Rename the _id field to hobby for better output
  {
    $project: {
      _id: 0,
      hobby: '$_id',
      userCount: 1,
    },
  },
]);
```

## Summary Table

| Stage     | Description                                      |
| --------- | ------------------------------------------------ |
| `$unwind` | Breaks arrays (like `friends`, `tags`) into docs |
| `$group`  | Aggregates documents using `_id`                 |
| `$sum: 1` | Increments counter per group                     |
| `$push`   | Collects values into an array per group          |
