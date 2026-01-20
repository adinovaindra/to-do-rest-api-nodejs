import { getAllTodos } from "../repositories/todoRepository.js";
import { validationError } from "../utils/validationError.js";

export function getTodoByTitleService(task) {
  if (task === undefined || typeof task !== "string" || !task.trim()) {
    const error = {};
    error.title = "Task is not set correctly!";
    throw validationError(error);
  }

  const todos = getAllTodos();
  let totalResultFound = [];
  for (const todo of todos) {
    if (todo.title.toLowerCase().includes(task.toLowerCase())) {
      totalResultFound.push(todo);
    }
  }

  if (totalResultFound.length > 0) {
    return totalResultFound;
  } else {
    const error = {};
    error.title = "Task is not Available!";
    throw validationError(error);
  }
}
