## 📌 What is Aggregation?

Aggregation is the process of transforming, summarizing, and analyzing data. In
MongoDB, the Aggregation Framework allows you to process data records and return
computed results — similar to SQL’s `GROUP BY`, `SUM`, `JOIN`, and `AVG`.

## 🧠 Why is it Powerful?

MongoDB’s Aggregation Framework is powerful because:

- It works like a pipeline, processing data through multiple transformation
  stages.

- It can filter, group, sort, reshape, and analyze data efficiently.

- It reduces the need for additional processing in your application code.

## ⚙️ Key Aggregation Stages

| Stage      | Description                                     |
| ---------- | ----------------------------------------------- |
| `$match`   | Filters documents (like WHERE in SQL)           |
| `$group`   | Groups documents and performs operations        |
| `$sort`    | Sorts the documents                             |
| `$project` | Selects specific fields and reshapes the output |
| `$limit`   | Limits the number of documents returned         |
| `$count`   | Counts the number of documents                  |

## Syntax

```js
db.collection.aggregate([
  // Stage 1
  {
    /* operation */
  },

  // Stage 2
  {
    /* operation */
  },

  // Stage 3
  {
    /* operation */
  },
]);
```

### Example

Suppose we have a `cousins` collection. The goal is to:

1. Exclude cousins who have an exam
2. Include only those with a budget of 500 or more
3. Sort them by age (descending)
4. Calculate the total budget and list their names

```js
db.cousins.aggregate([
  // Filter out cousins who have exams
  {
    $match: { hasExam: { $ne: true } },
  },
  // Filter out cousins with budget less than 500
  {
    $match: { budget: { $gte: 500 } },
  },
  // Sort by age in descending order
  {
    $sort: { age: -1 },
  },
  // Group to calculate total budget and collect names
  {
    $group: {
      _id: null,
      totalBudget: { $sum: '$budget' },
      cousins: { $push: '$name' },
    },
  },
]);
```

## 📊 When to Use Aggregation Framework

- Generating reports

- Creating dashboards

- Performing statistical analysis

- Reshaping or transforming large datasets
