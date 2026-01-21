import { deleteTodoByTitleService } from "../services/deleteTodoByTitleService.js"

export function deleteTodoByTitle(req, res, next) {
    const title = req.query.title

    try {
        const selectedTodo = deleteTodoByTitleService(title)
        res.status(200)
        res.json({
            status: "success",
            message: "Task is successfully deleted!",
            data: selectedTodo
        })
    } catch (error) {
        next(error)
    }
}