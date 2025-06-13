## 📘 MongoDB Indexing Notes

### 🧩 1. Compound Index

**Definition**: A compound index is created using multiple fields together in a
single index.

#### ✅ Example:

```js
db.users.createIndex({ name: 1, age: -1 });
```

- `name` will be indexed in ascending order (1)

- `age` will be indexed in descending order (-1)

### 📈 Benefit:

```js
db.users.find({ name: 'Neela', age: 21 });
```

This query will use the index and return results faster.

⚠️ Note:

- The first field in the index (`name` in this case) must be present in the
  query to utilize the index.

- For example, a query using only `age` will not use this index.

### 🔍 2. Text Index

**Definition**: A text index is used to perform full-text search on string-type
fields.

#### ✅ Example:

```js
db.articles.createIndex({ title: 'text', description: 'text' });
```

This allows you to search through `title` and `description` text content.

### 🔎 How to search:

```js
db.articles.find({ $text: { $search: 'mongodb tutorial' } });
```

This query will find documents that contain the words "mongodb" or "tutorial".

💡 Extra Tips:

- A collection can only have one text index.

- Text indexes are case-insensitive.

### 🧠 Summary Comparison

| Feature           | Compound Index                     | Text Index                         |
| ----------------- | ---------------------------------- | ---------------------------------- |
| Works on          | Multiple specific fields           | Text fields                        |
| Search style      | Filters by exact values            | Searches by keywords               |
| Case-sensitive?   | Yes                                | No                                 |
| Number of indexes | Can have multiple compound indexes | Only one text index per collection |
