# MongoDB Aggregation Stages: `$bucket`, `$sort`, and `$limit`

## `$bucket`

The `$bucket` stage is used to categorize documents into groups (buckets) based
on a specified expression and a set of defined boundaries. It's like putting
items into different bins based on their value or range.

- Purpose: To group documents into a fixed number of categories based on a
  common field's value.

- Key Features

- `groupBy`: The expression to categorize documents by (e.g., a field name like
  ` "$age"` or a computed value).

- `boundaries`: An array of values that define the upper and lower bounds for
  each bucket. Documents fall into a bucket if their `groupBy` value is greater
  than or equal to the lower bound and less than the upper bound.

- `default` (Optional): A bucket to catch documents that fall outside the
  defined `boundaries`.

- `output` (Optional): Specifies fields to include in the output documents for
  each bucket, often using accumulator operators like `$sum`, `$avg`, `$min`,
  `$max`, etc.

  - Example Use Case: Categorizing users by age ranges (e.g., 0-18, 19-35,
    36-60, 60+).

```js
[
  {
    $bucket: {
      groupBy: '$age',
      boundaries: [0, 18, 35, 60, Infinity], // Define age ranges
      default: 'Other Ages',
      output: {
        count: { $sum: 1 }, // Count documents in each bucket
        averageAge: { $avg: '$age' }, // Calculate average age per bucket
      },
    },
  },
];
```

# `$sort`

The `$sort` stage reorders the documents based on the values of one or more
specified fields. It arranges documents in either ascending or descending order.

- Purpose: To arrange documents in a specific sequence before further processing
  or final output.

- Key Features:

- Use `1` for ascending order (A-Z, 0-9).
- Use `-1 `for descending order (Z-A, 9-0).

- Example Use Case: Displaying products from the most expensive to the least
  expensive, or ordering users by their join date from newest to oldest.

```js
[
  {
    $sort: {
      price: -1, // Sorts documents by 'price' in descending order
    },
  },
];
```

# `$limit`

The `$limit` stage restricts the number of documents that pass to the next stage
in the aggregation pipeline. It's used to retrieve a specific number of
documents, typically the "top N" or "first N" results after sorting.

-Example Use Case: Getting only the top 5 highest-rated movies, or fetching the
first 20 most recent blog posts.

```js
[
  {
    $limit: 10, // Passes only the first 10 documents
  },
];
```
