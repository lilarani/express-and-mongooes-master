# explore more about $group & $project

```js
db.test.aggregate([
  // stage-1: grouping the data
  {
    $group: {
      _id: null, // group all documents together
      totalUser: { $sum: 1 }, // acts like $count
      sumOfAge: { $sum: '$age' }, // total of all "age" fields
      minAge: { $min: '$age' }, // smallest age
      maxAge: { $max: '$age' }, // largest age
      avgAge: { $avg: '$age' }, // average age
      allAges: { $push: '$age' }, // list of ages
    },
  },

  // stage-2: shaping the output
  {
    $project: {
      allUsersCount: '$totalUser', // renaming totalUser
      sumOfAge: 1, // keep as is
      minAge: 1, // keep as is
      maxAge: 1, // keep as is
      avgAge: 1, // keep as is
      allAges: 1, // keep as is
      rangeBetweenMaxAndMinAge: {
        $subtract: ['$maxAge', '$minAge'], // custom calculated field
      },
    },
  },
]);
```

### ✅ MongoDB `$group` Aggregation Operators

| Operator | Description                       | Example              |
| -------- | --------------------------------- | -------------------- |
| `$count` | No direct `$count`, use `$sum: 1` | `{ $sum: 1 }`        |
| `$sum`   | Total sum of a numeric field      | `{ $sum: "$age" }`   |
| `$min`   | Minimum value of a field          | `{ $min: "$age" }`   |
| `$max`   | Maximum value of a field          | `{ $max: "$age" }`   |
| `$avg`   | Average of a numeric field        | `{ $avg: "$age" }`   |
| `$push`  | Push each value to an array       | `{ $push: "$name" }` |

### ✅ MongoDB `$project` Stage

Used to:

- **Rename** fields
- **Include/exclude** fields
- **Perform basic calculations or transformations**

💡 Only the listed operators are used in combination with `$group` output to
shape the final result.
