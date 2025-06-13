# `$group` ,` $sum` , `$push` aggregation stage

## 📘 `$group` Stage

Groups documents by a specified \_id field and allows you to perform aggregation
operations on grouped data.

### ➤ Syntax:

```js
{
  $group: {
    _id: "$fieldName",
    resultField: { <accumulator>: "$otherField" }
  }
}
```

### ➤ Example:

Group sales data by category and calculate total sales:

```js
{
  $group: {
    _id: "$category",
    totalSales: { $sum: "$price" }
  }
}
```

## 🧮 `$sum `Operator

Calculates the total sum of numeric values. Commonly used inside the $group
stage.

### ➤ Syntax:

```js
{
  $sum: '$field';
} // Sums the values of a field
{
  $sum: 1;
} // Counts the number of documents
```

### ➤ Example:

```js
{
  $group: {
    _id: "$type",
    count: { $sum: 1 }
  }
}
```

## 📥 `$push` Operator

Adds values to an array within a group — it collects all values for a field from
grouped documents.

### ➤ Syntax:

```js
{
  $push: '$field';
}
```

### ➤ Example:

```js
{
  $group: {
    _id: "$class",
    studentNames: { $push: "$name" }
  }
}
```

This collects all `name` values into an array grouped by `class`.

## ✅ Common Use Together

```js
db.collection.aggregate([
  {
    $group: {
      _id: '$department',
      totalSalary: { $sum: '$salary' },
      employeeNames: { $push: '$name' },
    },
  },
]);
```
