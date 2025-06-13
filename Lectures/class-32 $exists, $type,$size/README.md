# `$exists`, `$type`, `$size`

### `$exists` — Check if a field exists or not

```js
// Find documents where the 'email' field exists
db.test.find({ email: { $exists: true } });

// Find documents where 'phone' field does NOT exist
db.test.find({ phone: { $exists: false } });
```

### `$type` — Match field by BSON data type

**Common type numbers:**

- `1`: double (float)
- `2`: string
- `3`: object
- `4`: array
- `8`: boolean
- `9`: date
- `10`: null
- `16`: int
- `18`: long

```js
// Find documents where 'age' is stored as an integer
db.test.find({ age: { $type: 16 } });

// Or use string aliases (recommended)
db.test.find({ age: { $type: 'int' } });

// Find documents where 'createdAt' is a date
db.test.find({ createdAt: { $type: 'date' } });

// Match fields with multiple possible types
db.test.find({ price: { $type: ['int', 'double'] } });
```

### `$size` — Match array by length

```js
// Find documents where the 'tags' array has exactly 3 elements
db.test.find({ tags: { $size: 3 } });
```

> `$size` works only with **arrays** and checks the **exact** length.

### Real-world Example

```js
// Find users who have a 'hobbies' array with exactly 2 hobbies
db.test.find({ hobbies: { $exists: true, $size: 2 } });
```
