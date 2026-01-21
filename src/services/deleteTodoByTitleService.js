import { getAllTodos, saveAllTodos } from "../repositories/todoRepository.js";
import { validationError } from "../utils/validationError.js";

export function deleteTodoByTitleService(title) {
    
    const todos = getAllTodos()
    const targetTodo = todos.findIndex((todo) => {
        return todo.title === title
    })
    
    if(targetTodo === -1) {
        const error = `Task with title => ${title} is not found!`
        const statusCode = 404
        throw validationError(error, statusCode)
    }

    const selectedTodo = todos[targetTodo]
    todos.splice(selectedTodo,1)
    saveAllTodos(todos)
    return selectedTodo
}