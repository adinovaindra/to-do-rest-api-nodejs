import { getAllTodos, saveAllTodos } from "../repositories/todoRepository.js";
import { validationError } from "../utils/validationError.js";

export function updateTodoByIdService(id, title, isCompleted) {
    const error = {}
    if (!title || typeof title !== 'string' || !title.trim()) {
        error.title = 'Title is must be a string type of data'
    }

    if (typeof isCompleted !== 'boolean') {
        error.isCompleted = 'status is must be a boolean type of data'
    }

    if (Object.keys(error).length > 0) {
        throw validationError(error)
    }


    const todos = getAllTodos()
    const todoById = todos.find((todo) => {
        return todo.id === id
    })

    if (todoById) {
        todoById.title = title ?? todoById.title
        todoById.isCompleted = typeof isCompleted === 'boolean' ? isCompleted : todoById.isCompleted

        saveAllTodos(todos)
    } else {
        const error = {}
        error.id = `Task with this ${id} is not found!`
        const statusCode = 404
        throw validationError(error, statusCode)
    }
    return todoById
}