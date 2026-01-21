import { getAllTodos } from "../repositories/todoRepository.js";
import { validationError } from "../utils/validationError.js";

export function getTodoByIdService(id) {
  const todos = getAllTodos();
  const findedTodo = todos.find((todo) => {
    return todo.id === id
  });
  if (findedTodo) {
    return findedTodo;
  } else {
    const error = {}
    const statusCode = 404
    error.id = "Task not found!"
    throw validationError(error, statusCode);
  }
}
