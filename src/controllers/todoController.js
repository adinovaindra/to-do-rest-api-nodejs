import todoService from "../services/todoService.js";

function createTodo(req, res, next) {
  try {
    const todo = todoService.createTodo(req.body);
    res.status(201);
    res.json({
      status: "success",
      data: todo,
    });
  } catch (error) {
    next(error);
  }
}

export default {
  createTodo,
};
