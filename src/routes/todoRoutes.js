import { Router } from "express";
import todoController from "../controllers/todoController.js";

export const todoRouter = Router();

todoRouter.post("/", todoController.createTodo);
