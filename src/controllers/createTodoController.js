import { createTodoService } from "../services/createTodoService.js";

export function createTodo(req, res, next) {
  try {
    const todo = createTodoService(req.body);
    res.status(201);
    res.json({
      status: "success",
      data: todo,
    });
  } catch (error) {
    next(error);
  }
}
