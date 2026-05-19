const tarefas = []

let addTaskInput = document.querySelector('#addTaskInput');
let addBtnTask = document.querySelector('#addBtnTask');
let taskContainer = document.querySelector('#taskContainer');


addBtnTask.addEventListener('click', (e) => {
    
    addTask()
    renderizarTarefas()
});

function addTask() {
    const valor = addTaskInput.value
    tarefas.push(valor)
}

function renderizarTarefas() {

    taskContainer.innerHTML = ''

    tarefas.forEach(tarefa => {
        const li = document.createElement('li')
        li.textContent = tarefa
        taskContainer.appendChild(li)
    })
}