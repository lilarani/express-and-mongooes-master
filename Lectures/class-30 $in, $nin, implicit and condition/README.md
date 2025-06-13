# MongoDB Query Operators — From Basics to Advanced

## 1. Basic CRUD Queries

### `insertOne()` / `insertMany()`

```js
db.collection.insertOne({ name: 'Neela', age: 22 });
db.collection.insertMany([{ name: 'Ababil' }, { name: 'Neela' }]);
```

### `find()` / `findOne()`

```js
db.collection.find({ age: 18 }); // returns a cursor
db.collection.findOne({ name: 'Ababil' }); // returns one document
```

### Field Filtering (Projection)

```js
db.collection.find({}, { name: 1, _id: 0 }); // include only 'name'
```

## 2. Comparison Operators

### `$eq` — Equals

```js
db.users.find({ age: { $eq: 18 } });
```

### `$ne` — Not Equal

```js
db.users.find({ name: { $ne: 'Neela' } });
```

### `$gt`, `$lt`, `$gte`, `$lte` — Greater/Less Than

```js
db.students.find({ marks: { $gt: 80 } });
db.students.find({ age: { $lte: 25 } });
```

### Combining `$gte` and `$lte`

```js
db.students.find({ age: { $gte: 18, $lte: 25 } });
```

## 3. `$in` and `$nin`

### `$in` — Match any in an array

```js
db.users.find({ role: { $in: ['admin', 'moderator'] } });
```

### `$nin` — Not in array

```js
db.users.find({ status: { $nin: ['banned', 'inactive'] } });
```

## 4. Implicit `$and` (Default Behavior)

When multiple fields are used in a query, MongoDB applies an implicit AND:

```js
db.users.find({
  active: true,
  age: { $gte: 18 },
  role: 'user',
});
```

Same as:

```js
db.users.find({
  $and: [{ active: true }, { age: { $gte: 18 } }, { role: 'user' }],
});
```

## 5. Logical Operators

### `$and`

```js
db.users.find({
  $and: [{ active: true }, { age: { $gte: 18 } }],
});
```

### `$or`

```js
db.users.find({
  $or: [{ age: { $lt: 18 } }, { status: 'banned' }],
});
```

### `$not`

```js
db.users.find({
  age: { $not: { $lt: 18 } }, // age >= 18
});
```

### `$nor` — NOT OR

```js
db.users.find({
  $nor: [{ age: { $lt: 18 } }, { banned: true }],
});
```

## 6. Compound Logical Comparison

### Complex Example

```js
// ((x > y) && (y == z)) || (x == z)
db.collection.find({
  $or: [
    {
      $and: [{ x: { $gt: '$y' } }, { y: { $eq: '$z' } }],
    },
    { x: { $eq: '$z' } },
  ],
});
```

Note: Use `$expr` if comparing fields:

```js
db.collection.find({
  $expr: {
    $or: [
      { $and: [{ $gt: ['$x', '$y'] }, { $eq: ['$y', '$z'] }] },
      { $eq: ['$x', '$z'] },
    ],
  },
});
```

## Summary Table

| Operator | Meaning                     |
| -------- | --------------------------- |
| `$eq`    | Equal                       |
| `$ne`    | Not equal                   |
| `$gt`    | Greater than                |
| `$lt`    | Less than                   |
| `$gte`   | Greater than or equal       |
| `$lte`   | Less than or equal          |
| `$in`    | Match any value in array    |
| `$nin`   | Exclude values in array     |
| `$and`   | All conditions must be true |
| `$or`    | At least one must be true   |
| `$not`   | Negate a condition          |
| `$nor`   | All must be false           |
