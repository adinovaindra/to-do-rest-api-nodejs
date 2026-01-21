import { updateTodoByTitleService } from "../services/updateTodoByTitleService.js"

export function updateTodoByTitle(req, res, next) {
    const oldTitle = req.query.title
    const {title, isCompleted} = req.body

    try {
        const newTodo = updateTodoByTitleService(oldTitle, title, isCompleted)
        res.status(200)
        res.json({
            status: 'success',
            data: newTodo
        })
    } catch (error) {
        next(error)
    }
}