import { updateTodoByIdService } from "../services/updateTodoByIdService.js";

export function updateTodoById(req, res, next) {
  const id = req.params.id;
  const { title, isCompleted } = req.body;

  try {
    const todo = updateTodoByIdService(id, title, isCompleted);
    res.status(200)
    res.json({
        status: 'success',
        data: todo
    })
  } catch (error) {
    next(error);
  }
}
