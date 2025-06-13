# _Insert_, _insertOne_, _find_, _findOne_, _field filtering_, _project_

### 🔄 Switch & Setup

- **Switch to a database** (creates it if it doesn’t exist):

  ```js
  use test;
  ```

- **Show all existing databases**:

  ```js
  show dbs;
  ```

- **Create a new collection named `test`**:

  ```js
  db.createCollection('test');
  ```

- **Show all collections in the current database**:

  ```js
  show collections;
  ```

### 📥 Insert Operations

- **Insert a single document** (⚠️ _deprecated_):

  ```js
  db.test.insert({
    name: 'Something',
  });
  ```

- **Insert a single document (modern way)**:

  ```js
  db.test.insertOne({
    name: 'Something',
  });
  ```

- **Insert multiple documents at once**:

  ```js
  db.test.insertMany([
    { name: 'Complete Web Development' },
    { name: 'Next Level Web Development' },
  ]);
  ```

### 🔍 Read Operations

- **Find all documents in the collection**:

  ```js
  db.test.find();
  ```

- **Find the first document matching a condition**:

  ```js
  db.test.findOne({ name: 'Something' });
  ```

### 🔎 Field Filtering / Projection

- **Include only the `name` field in results**:

  ```js
  db.test.find({}, { name: 1 });
  ```

- **Include `name` and exclude the `_id` field**:

  ```js
  db.test.find({}, { name: 1, _id: 0 });
  ```

- **Filter by value and project specific fields**:

  ```js
  db.test.find({ name: 'Complete Web Development' }, { name: 1, _id: 0 });
  ```
