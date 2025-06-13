## What is `$facet`?

`$facet` allows you to run **multiple aggregation pipelines** in parallel within
a single query. Each pipeline processes the **same dataset** differently and
returns a unified result object — like seeing the same soul through different
lenses.

## Query Structure

```js
db.test.aggregate([
  {
    $facet: {
      // Count how many times each friend appears
      friendsCount: [
        { $unwind: '$friends' },
        { $group: { _id: '$friends.name', count: { $sum: 1 } } },
      ],

      // Count how many times each tag appears
      tagsCount: [
        { $unwind: '$tags' },
        { $group: { _id: '$tags', count: { $sum: 1 } } },
      ],
    },
  },
]);
```

## When to Use `$facet`

- For **real-time dashboards** showing different stats.
- When building **multi-filtered search results**.
- To **summarize multiple dimensions** (e.g., friends, tags).
- To avoid multiple round-trips from client to database.
