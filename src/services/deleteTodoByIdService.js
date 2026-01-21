import { getAllTodos, saveAllTodos } from "../repositories/todoRepository.js";
import { validationError } from "../utils/validationError.js";

export function deleteTodoByIdService(id) {
  const todos = getAllTodos();
  const targetTodo = todos.findIndex((todo) => {
    return todo.id === id;
  });
  if (targetTodo == -1) {
    const error = {};
    error.id = `There is no task with this id => ${id}`;
    const statusCode = 404;
    throw validationError(error, statusCode);
  }
  const selectedTodo = todos[targetTodo];

  todos.splice(targetTodo, 1);
  saveAllTodos(todos);
  return selectedTodo;
}
