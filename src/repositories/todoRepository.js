import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = join(__dirname, "..", "data", "todos.json")

export function getAllTodos() {
  const todos = [];
  try {
    const rawData = readFileSync(filePath, "utf-8");
    return JSON.parse(rawData);
  } catch (error) {
    console.log(error);
    return todos;
  }
}

export function saveAllTodos(arrayOfObject) {
  try {
    writeFileSync(filePath, JSON.stringify(arrayOfObject, null, 2));
  } catch (error) {
    console.log(error);
  }
}

