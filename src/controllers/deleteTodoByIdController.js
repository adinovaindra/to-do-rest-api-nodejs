import { deleteTodoByIdService } from "../services/deleteTodoByIdService.js";

export function deleteTodoById(req, res, next) {
  const id = req.params.id;
  try {
    const deletedTodo = deleteTodoByIdService(id);
    res.status(200);
    res.json({
      status: "success",
      message: `Task "${deletedTodo.title}" has been successfully deleted!`,
      data: deletedTodo,
    });
  } catch (error) {
    next(error);
  }
}
