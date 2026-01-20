import { Router } from "express";
import { createTodo } from "../controllers/createTodoController.js";
import { mainGetTodo } from "../controllers/mainGetTodoController.js";


export const todoRouter = Router();

todoRouter.post("/", createTodo);
todoRouter.get("/", mainGetTodo);
