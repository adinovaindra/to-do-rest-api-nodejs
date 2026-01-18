const { getAllTodos, generateID, saveAllTodos } = require("./repositories/todoRepository");

const listTodo = getAllTodos()

const data = {
    id: generateID(),
    nama: 'Adinova Indra Permana'
}

listTodo.push(data)

saveAllTodos(listTodo)

getAllTodos()