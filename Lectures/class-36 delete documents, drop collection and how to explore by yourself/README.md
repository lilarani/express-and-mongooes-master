# 🗂 MongoDB – Delete Documents, Drop Collection & Explore by Yourself

This document provides clear instructions on how to delete documents, drop a
collection, and explore MongoDB using basic commands.

## 🧹 Deleting Documents

### ✅ Delete a Single Document:

```js
db.collection_name.deleteOne({ field_name: value });
```

Example:

```js
db.users.deleteOne({ name: 'Neela' });
```

### ✅ Delete Multiple Documents:

```js
db.collection_name.deleteMany({ field_name: value });
```

Example:

```js
db.users.deleteMany({ age: 21 });
```

## 🧨 Dropping a Collection

✅ Drop an Entire Collection:

```js
db.collection_name.drop();
```

Example:

```js
db.users.drop();
```

⚠️ Warning: This will permanently delete the entire collection along with all
documents.
