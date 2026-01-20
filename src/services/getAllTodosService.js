import { getAllTodos } from "../repositories/todoRepository.js";

export function getAllTodosService() {
    const todos = getAllTodos()
    return todos
}

