import { getAllTodos, saveAllTodos } from "../repositories/todoRepository.js";
import { validationError } from "../utils/validationError.js";

export function updateTodoByTitleService(oldTitle, newTitle, newIscomplete) {
  const errors = {};

  const todos = getAllTodos();

  if (!newTitle || typeof newTitle !== "string" || !newTitle.trim()) {
    errors.title = `Title must be filled with type of data string!`;
  }

  for (const todo of todos) {
    if(todo.title.toLowerCase() === newTitle.toLowerCase()) {
      errors.title = `Task with title '${newTitle}' is already exist!`;
    }
  }

  if (newIscomplete !== undefined && typeof newIscomplete !== "boolean") {
    errors.status = `Status must be filled with type of data boolean!`;
  }

  if (Object.keys(errors).length > 0) {
    const statusCode = 400;
    throw validationError(errors, statusCode);
  }

  const todoSelected = todos.find((todo) => {
    return todo.title.toLowerCase() === oldTitle.toLowerCase();
  });

  if (!todoSelected) {
    const errors = {};
    errors.title = `task with title => '${oldTitle}' is not found!`;
    const statusCode = 404;
    throw validationError(errors, statusCode);
  }

  todoSelected.title = newTitle;
  todoSelected.isCompleted =
    typeof newIscomplete === "boolean"
      ? newIscomplete
      : todoSelected.isCompleted;
  saveAllTodos(todos);

  return todoSelected;
}
