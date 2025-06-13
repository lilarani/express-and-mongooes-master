# `$unset`, `$pop`, `$pull`, `$pullAll`

## ✅ `$unset`

Removes a field from the document.

Example:

```js
db.users.updateOne({ _id: 1 }, { $unset: { age: '' } });
```

👉 This will remove the` age` field from the document.

## ✅ `$pop`

Removes an item from the start `(-1)` or end `(1)` of an array.

Example:

```js
db.users.updateOne({ _id: 1 }, { $pop: { scores: 1 } });
```

👉 Removes the last item from the scores array.

```js
db.users.updateOne({ _id: 1 }, { $pop: { scores: -1 } });
```

👉 Removes the first item from the scores array.

## ✅ `$pull`

Removes all elements from an array that match a condition or value.

Example:

```js
db.users.updateOne({ _id: 1 }, { $pull: { scores: 80 } });
```

👉 Removes all 80s from the scores array.

```js
db.users.updateOne({ _id: 1 }, { $pull: { scores: { $lt: 50 } } });
```

👉 Removes all scores less than 50.

## ✅ `$pullAll`

Removes multiple specific values from an array at once.

```js
db.users.updateOne({ _id: 1 }, { $pullAll: { scores: [80, 85] } });
```

👉 Removes all `80 `and `85 `values from `scores`.

## ✨ Summary Table:

| Operator   | What it does                                   |
| ---------- | ---------------------------------------------- |
| `$unset`   | Removes a field from a document                |
| `$pop`     | Removes the first or last item from an array   |
| `$pull`    | Removes items matching a condition/value       |
| `$pullAll` | Removes multiple specific values from an array |
