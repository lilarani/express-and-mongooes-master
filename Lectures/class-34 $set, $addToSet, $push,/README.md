# $set, $addToSet, $push, $each

## ✅ $set

Purpose:

Sets a new value to a specific field. If the field does not exist, it creates
it.

Example:

```js
db.test.updateOne(
  { _id: objectId('6406ad63fc13ae5a40000069') },
  { $set: { interests: ['coding'] } }
);
```

👉 Now interests will be "coding"

## ✅ $addToSet

Purpose: Adds a new item to an array only if it does not already exist. Prevents
duplicates.

Example:

```js
db.test.updateOne({ _id: 1 }, { $addToSet: { hobbies: 'coding' } });
```

👉 "coding" will be added to the hobbies array only if it’s not already there.

## ✅ $push

Purpose: Always adds a new value to an array (even if it’s a duplicate). The
value is added at the end.

Example:

```js
db.users.updateOne({ _id: 1 }, { $push: { scores: 95 } });
```

👉 95 will be added at the end of the `scores` array.

## ✅ $each (used with $push or $addToSet)

Purpose: Used to insert multiple values into an array at once. It works inside
`$push` or `$addToSet`.

Example (with `$push`):

```JS
db.users.updateOne(
  { _id: 1 },
  { $push: { scores: { $each: [80, 85, 90] } } }
)
```

👉 All three values will be added to the scores array.

| Operator              | Function/Usage                                                     |
| --------------------- | ------------------------------------------------------------------ |
| `$push` + `$each`     | Adds multiple values at once, **always adds (duplicates allowed)** |
| `$addToSet` + `$each` | Adds multiple values at once, **ignores duplicates**               |

## ✨ Summary of Differences:

| Operator    | Purpose                                          |
| ----------- | ------------------------------------------------ |
| `$set`      | Sets or updates a field’s value                  |
| `$addToSet` | Adds to an array only if the value doesn't exist |
| `$push`     | Always adds a value to the end of an array       |
| `$each`     | Adds multiple values to an array at once         |
