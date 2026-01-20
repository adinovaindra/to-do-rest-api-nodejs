import { getAllTodos, saveAllTodos } from "../repositories/todoRepository.js";
import { generateID } from "../utils/generateID.js"
import {validationError} from "../utils/validationError.js"

export function createTodoService(payload) {
  const errors = {};

  if (!payload || typeof payload !== "object") {
    throw validationError({
      body: "request body must be a JSON object!",
    });
  }

  const { title, isCompleted } = payload;

  if (!title || typeof title !== "string" || !title.trim()) {
    errors.title = "Title is required and must be a non-empty string!";
  }

  if (isCompleted !== undefined && typeof isCompleted !== "boolean") {
    errors.isCompleted = "isCompleted must be a boolean if provided!";
  }

  if (Object.keys(errors).length > 0) {
    throw validationError(errors);
  }

  const todos = getAllTodos();

  const newTodo = {
    id: generateID(),
    title: title.trim(),
    isCompleted: isCompleted ?? false,
  };

  todos.push(newTodo);
  saveAllTodos(todos);

  return newTodo;
}
