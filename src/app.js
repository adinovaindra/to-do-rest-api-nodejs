import express, { json } from "express";
import { todoRouter } from "./routes/todoRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
const app = express();
const PORT = 3000;

app.use(json());

app.use("/api/todos", todoRouter);

app.get("/health", (req, res) => {
  res.status(200);
  res.json({
    status: "OK!",
  });
});

app.use(notFoundHandler)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
