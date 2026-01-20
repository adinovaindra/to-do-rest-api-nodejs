import { getAllTodosService } from "../services/getAllTodosService.js";
import { getTodoByStatusService } from "../services/getTodoByStatusService.js";
import { getTodoByTitleAndStatusService } from "../services/getTodoByTitleAndStatusService.js";
import { getTodoByTitleService } from "../services/getTodoByTitleService.js";
import { validationError } from "../utils/validationError.js";

export function mainGetTodo(req, res, next) {
  const rawTitle = req.query.title;
  const rawIsCompleted = req.query.isCompleted;
  let isCompleted;

  let result;
  try {
    if (rawIsCompleted === "true") {
      isCompleted = true;
    } else if (rawIsCompleted === "false") {
      isCompleted = false;
    } else if (rawIsCompleted !== undefined) {
      const error = {};
      error.isCompleted = "Status is not a boolean type of data!";
      throw validationError(error);
    }
    
    if (rawTitle === undefined && rawIsCompleted === undefined) {
      result = getAllTodosService();
    } else if (rawTitle === undefined && rawIsCompleted !== undefined) {
      result = getTodoByStatusService(isCompleted);
    } else if (rawTitle !== undefined && rawIsCompleted === undefined) {
      const title = rawTitle.trim();
      if (!title) {
        const error = {};
        error.title = "Title must not be empty!";
        throw validationError(error);
      } else {
        result = getTodoByTitleService(title);
      }
    } else {
      const title = rawTitle.trim();
      if (!title) {
        const error = {};
        error.title = "Title must not be empty!";
        throw validationError(error);
      } else {
        result = getTodoByTitleAndStatusService(title, isCompleted);
      }
    }
    res.status(200);
    res.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}
