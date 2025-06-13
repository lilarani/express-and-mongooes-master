# 📘 MongoDB Logical Operators: $and, $or, and Implicit vs Explicit Syntax

### 🔹 `$and` Operator

The `$and`operator matches documents that satisfy all the conditions in the
array.

✅ Explicit $and (recommended for clarity):

```js
db.users.find({
  $and: [{ age: { $gte: 18 } }, { gender: 'Female' }],
});
```

### ✅ Implicit $and (simpler syntax):

```js
db.users.find({
  age: { $gte: 18 },
  gender: 'Female',
});
```

🔸 The implicit form automatically assumes an $and between the conditions.

### 🔹` $or` Operator

The `$or` operator matches documents that satisfy at least one condition in the
array.

✅ Example:

```js
db.users.find({
  $or: [{ age: { $lt: 18 } }, { gender: 'Male' }],
});
```

This will return all users who are either under 18 or male.

## 🔸 Combining `$and` and `$or`

combine `$and` and `$or` together.

✅ Example:

```js
db.users.find({
  $and: [{ gender: 'Female' }, { $or: [{ age: 20 }, { age: 25 }] }],
});
```

This will return female users whose age is either 20 or 25.

## 🔍 Summary

| Syntax Type     | Format                                             | Use Case                                    |
| --------------- | -------------------------------------------------- | ------------------------------------------- |
| Implicit `$and` | `{ field1: value1, field2: value2 }`               | Simple AND queries                          |
| Explicit `$and` | `{ $and: [ {field1: value1}, {field2: value2} ] }` | When combining with other logical operators |
| `$or`           | `{ $or: [ {condition1}, {condition2} ] }`          | Matches if **any one** condition is true    |

### 📌 Notes

- Use explicit syntax when nesting or combining multiple logical operators.

- Use implicit syntax for cleaner and shorter queries when possible.

