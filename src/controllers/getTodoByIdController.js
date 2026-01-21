import { getTodoByIdService } from "../services/getTodoByIdService.js"

export function getTodoById(req, res, next) {
    const id = req.params.id
    try {
        const data = getTodoByIdService(id)
        res.status(200)
        res.json({
            status: 'success',
            data
        })
    } catch (error) {
        next(error)
    }
}