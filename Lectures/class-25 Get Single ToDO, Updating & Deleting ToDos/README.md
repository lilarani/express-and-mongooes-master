# 📦 Controller Code

## 🧾 ১। Get a Single ToDo

```ts
import { Request, Response } from 'express';
import Todo from '../models/Todo'; // তোমার Mongoose মডেল

export const getSingleTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).json({ message: 'ToDo পাওয়া যায়নি' });
      return;
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'ভুল হয়েছে', error });
  }
};
```

🟢 URL: /api/todos/:id

🛠️ কাজ: নির্দিষ্ট আইডি দিয়ে একটি ToDo বের করতে হবে।

## 🛠️ ToDo আপডেট করতে হবে (PUT)

```ts
import { Request, Response } from 'express';

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updated = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true, runValidators: true }
    );

    if (!updated) {
      res.status(404).json({ message: 'ToDo পাওয়া যায়নি' });
      return;
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'আপডেট করতে সমস্যা হয়েছে', error });
  }
};
```

## ❌ ToDo ডিলিট করতে হবে (DELETE)

```ts
import { Request, Response } from 'express';

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Todo.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ message: 'ToDo পাওয়া যায়নি' });
      return;
    }

    res.status(200).json({ message: 'ToDo ডিলিট হয়েছে' });
  } catch (error) {
    res.status(500).json({ message: 'ডিলিট করতে সমস্যা হয়েছে', error });
  }
};
```

🟢 URL: /api/todos/:id

🛠️ কাজ: আইডি দিয়ে ডাটাবেজ থেকে ToDo ডিলিট করতে হবে।

# Routes

```ts
import express from 'express';
import {
  getSingleTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todoController';

const router = express.Router();

router.get('/todos/:id', getSingleTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;
```
