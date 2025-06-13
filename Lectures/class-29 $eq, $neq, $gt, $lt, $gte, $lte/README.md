# MongoDB Query Operators — From Basics to Advanced

## 1. **Basic Comparison Operators**

Compare field values against constants.

| Operator | Meaning          | Example                 |
| -------- | ---------------- | ----------------------- |
| `$eq`    | Equals           | `{ age: { $eq: 18 } }`  |
| `$ne`    | Not equals       | `{ age: { $ne: 18 } }`  |
| `$gt`    | Greater than     | `{ age: { $gt: 18 } }`  |
| `$lt`    | Less than        | `{ age: { $lt: 18 } }`  |
| `$gte`   | Greater or equal | `{ age: { $gte: 18 } }` |
| `$lte`   | Less or equal    | `{ age: { $lte: 18 } }` |

**Example: Find users older than 21**

```js
db.users.find({ age: { $gt: 21 } });
```

## 2. **Negation with `$not`**

Invert a condition inside a field.

```js
// Find users NOT younger than 18 (age >= 18)
db.users.find({ age: { $not: { $lt: 18 } } });
```

_Note:_ `$not` applies only inside a field condition.

## 3. **Logical Operators**

Combine multiple conditions logically.

| Operator | Meaning                     | Example                                                 |
| -------- | --------------------------- | ------------------------------------------------------- |
| `$and`   | All conditions must be true | `{ $and: [ { age: { $gt: 18 } }, { active: true } ] }`  |
| `$or`    | At least one condition true | `{ $or: [ { role: "admin" }, { role: "moderator" } ] }` |
| `$nor`   | None of the conditions true | `{ $nor: [ { banned: true }, { age: { $lt: 10 } } ] }`  |

## 4. **Implicit AND**

When you list multiple fields in a query, MongoDB implicitly ANDs them.

```js
// Find active users older than 18
db.users.find({ age: { $gt: 18 }, active: true });
```

## 5. **Compound Logical Expressions**

Combine `$and` and `$or` for complex filters.

**Example:** Find users who are either minors or seniors **and** are active.

```js
db.users.find({
  $and: [
    {
      $or: [{ age: { $lt: 18 } }, { age: { $gt: 60 } }],
    },
    { active: true },
  ],
});
```

## 6. **Advanced: Field-to-Field Comparison with `$expr`**

MongoDB can compare values of different fields in the **same document** with
`$expr`.

### Why `$expr`?

- Basic operators compare fields to fixed values.
- `$expr` allows comparing field values **to other fields** or expressions.

### Examples with `$expr`

| Logic                                | MongoDB Query                                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `x == y`                             | `{ $expr: { $eq: ["$x", "$y"] } }`                                                                          |
| `x != y`                             | `{ $expr: { $ne: ["$x", "$y"] } }`                                                                          |
| `x > y`                              | `{ $expr: { $gt: ["$x", "$y"] } }`                                                                          |
| `(x > y) AND (y == z)`               | `{ $expr: { $and: [ { $gt: ["$x", "$y"] }, { $eq: ["$y", "$z"] } ] } }`                                     |
| `((x > y) AND (y == z)) OR (x == z)` | `{ $expr: { $or: [ { $and: [ { $gt: ["$x", "$y"] }, { $eq: ["$y", "$z"] } ] }, { $eq: ["$x", "$z"] } ] } }` |

## 7. **Negation inside `$expr`**

You can also negate inside `$expr` using `$not`.

```js
db.records.find({
  $expr: {
    $not: { $gt: ['$score', '$passingScore'] },
  },
});
```

_Find documents where `score` is NOT greater than `passingScore`._

## 8. **Using `$expr` with aggregation operators**

Combine `$expr` with other MongoDB expressions:

```js
db.sales.find({
  $expr: {
    $gt: [{ $subtract: ['$price', '$discount'] }, 100],
  },
});
```

_Find sales where `(price - discount) > 100`._

## 9. **Summary Cheatsheet**

```js
// Basic comparisons
{
  field: {
    $eq: value;
  }
}
{
  field: {
    $ne: value;
  }
}
{
  field: {
    $gt: value;
  }
}

// Logical
{
  $and: [cond1, cond2];
}
{
  $or: [cond1, cond2];
}
{
  $nor: [cond1, cond2];
}

// Negation
{
  field: {
    $not: {
      $lt: value;
    }
  }
}

// Field-to-field comparisons with $expr
{
  $expr: {
    $eq: ['$field1', '$field2'];
  }
}
{
  $expr: {
    $and: [{ $gt: ['$x', '$y'] }, { $eq: ['$y', '$z'] }];
  }
}
```
