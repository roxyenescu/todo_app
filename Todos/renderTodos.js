import { toDos } from '../Database/todos.js'
import { deleteToDo } from './delete.js'

export function renderTodos() {
    document.getElementById('toDos').innerHTML = "<h1>My To-Dos</h1>"
    toDos.forEach((todo)=> {
        const todoDiv = document.createElement('div')
        todoDiv.id = todo.id
        const todoTask = document.createElement ('div')
        todoTask.textContent = todo.taskName
        todoTask.classList.add('taskName')
        todoDiv.appendChild(todoTask)

        const todoReaponsible = document.createElement ('div')
        todoReaponsible.textContent = todo.responsible
        todoReaponsible.classList.add('taskResponsible')
        todoDiv.appendChild(todoReaponsible)
    
        const todoStatus = document.createElement ('div')
        todoStatus.textContent = todo.status
        todoStatus.classList.add('taskStatus')
        todoDiv.appendChild(todoStatus)

        const todoDeleteButton = document.createElement('button')
        todoDeleteButton.textContent = "DELETE"
        todoDeleteButton.classList.add('taskButtons')
        todoDeleteButton.addEventListener('click', deleteToDo)

        todoDiv.appendChild(todoDeleteButton)
    
        const todoList = document.getElementById('toDos')
        todoList.appendChild(todoDiv)
    
    })
}