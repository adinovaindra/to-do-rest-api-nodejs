import { getAllTodos } from "../repositories/todoRepository.js";
import { validationError } from "../utils/validationError.js";

export function getTodoByTitleAndStatusService(title, isCompleted) {
    const todos = getAllTodos()
    let result = []
    for (const todo of todos) {
        if (todo.title.toLowerCase().includes(title.toLowerCase()) && todo.isCompleted === isCompleted) {
            result.push(todo)
        }
    }
    if (result.length > 0) {
        return result
    } else {
        const error = {}
        error.title = 'The task you are looking is either not in list nor has a correct status!'
        throw validationError(error)
    }
}

