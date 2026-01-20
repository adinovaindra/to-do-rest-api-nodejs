import { getAllTodos } from "../repositories/todoRepository.js";
import { validationError } from "../utils/validationError.js";

export function getTodoByStatusService(isCompleted) {
  const todos = getAllTodos();

  let todoList = [];

  for (const todo of todos) {
    if (todo.isCompleted === isCompleted) {
      todoList.push(todo);
    }
  }
  if (todoList.length > 0) {
    return todoList;
  } else {
    const error = {};
    if (isCompleted === true) {
      error.isCompleted = "There is no complete task for now!";
      throw validationError(error);
    } else {
      error.isCompleted = "There is no incomplete task for now!";
      throw validationError(error);
    }
  }
}
