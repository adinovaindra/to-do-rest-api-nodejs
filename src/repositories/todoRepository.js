const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, "..", "data", "todos.json");

function getAllTodos() {
  const todos = [];
  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(rawData);
  } catch (error) {
    console.log(error);
    return todos;
  }
}

function saveAllTodos(arrayOfObject) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(arrayOfObject, null, 2));
  } catch (error) {
    console.log(error);
  }
}

function generateID() {
  return `id${Date.now()}`
}

console.log(generateID())

module.exports = {
  getAllTodos,
  saveAllTodos,
  generateID,
};
