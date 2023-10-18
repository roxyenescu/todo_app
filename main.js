import { login } from './Login/login.js'
import { logout } from './Login/logout.js'
import { renderTodos } from './Todos/renderTodos.js'
import { addToDo } from './Todos/add.js'

const loginButton = document.getElementById("loginSubmit")
loginButton.addEventListener('click', login)

const isLoggedIn = localStorage.getItem("isLoggedIn")

if (isLoggedIn) {
    document.getElementById('login').setAttribute('hidden', 'true')
    document.getElementById('register').setAttribute('hidden', 'true')
    document.getElementById('user').removeAttribute('hidden')
    document.getElementById('greetings').textContent = 'Salut ' + localStorage.getItem('username')
}

renderTodos()

if (isLoggedIn) {
    let taskButtons = document.querySelectorAll('.taskButtons')
    taskButtons.forEach(element => {
        element.style.display = 'block'
    });
}

const logoutButton = document.getElementById("logout")
logoutButton.addEventListener('click', logout)


const addEditSubmit = document.getElementById("addEditSubmit")
addEditSubmit.addEventListener('click', addToDo)
