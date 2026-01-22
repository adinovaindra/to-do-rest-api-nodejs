import { getAllTodos, saveAllTodos } from "../repositories/todoRepository.js";
import { generateID } from "../utils/generateID.js";
import { validationError } from "../utils/validationError.js";

export function createTodoService(payload) {
  const errors = {};

  const todos = getAllTodos();

  if (!payload || typeof payload !== "object") {
    throw validationError({
      body: "request body must be a JSON object!",
    });
  }

  const { title, isCompleted } = payload;

  if (!title || typeof title !== "string" || !title.trim()) {
    errors.title = "Title is required and must be a non-empty string!";
  }

  for (const todo of todos) {
    if (todo.title.toLowerCase() === title.toLowerCase()) {
      errors.title = `Task with title '${title}' is already exist!`;
    }
  }

  if (isCompleted !== undefined && typeof isCompleted !== "boolean") {
    errors.isCompleted = "isCompleted must be a boolean if provided!";
  }

  if (Object.keys(errors).length > 0) {
    throw validationError(errors);
  }

  const newTodo = {
    id: generateID(),
    title: title.trim(),
    isCompleted: isCompleted ?? false,
  };

  todos.push(newTodo);
  saveAllTodos(todos);

  return newTodo;
}
