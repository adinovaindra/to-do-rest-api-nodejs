import { Router } from "express";
import { createTodo } from "../controllers/createTodoController.js";
import { mainGetTodo } from "../controllers/mainGetTodoController.js";
import { getTodoById } from "../controllers/getTodoByIdController.js";
import { updateTodoById } from "../controllers/updateTodoByIdController.js";
import { deleteTodoById } from "../controllers/deleteTodoByIdController.js";

export const todoRouter = Router();

todoRouter.post("/", createTodo);
todoRouter.get("/", mainGetTodo);
todoRouter.get("/:id", getTodoById);
todoRouter.put("/:id", updateTodoById);
todoRouter.delete("/:id", deleteTodoById);
