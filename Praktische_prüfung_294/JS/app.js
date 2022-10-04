const table = document.createElement("table")
const newTrForTh = document.createElement("tr")

const ThId = document.createElement("th")
ThId.innerText = "ID"

const ThTitle = document.createElement("th")
ThTitle.innerText = "Title"

const ThCompleted = document.createElement("th")
ThCompleted.innerText = "Completed"

const ueberschrift = document.createElement("h3")
ueberschrift.innerText = "Create new Todo"

const createTaskInputTitle = document.createElement("input")
createTaskInputTitle.type = "text"
createTaskInputTitle.placeholder = "set teh title of the task"
createTaskInputTitle.id =  "createTask"

const createTaskInputCompleted = document.createElement("input")
createTaskInputCompleted.type = "text"
createTaskInputCompleted.placeholder = "Set the state of the task"
createTaskInputCompleted.id = "compled"

const newTaskButton = document.createElement("input")
newTaskButton.type = "button"
newTaskButton.value = "create"
newTaskButton.addEventListener("click", () => {
    const newTaskTitle = document.getElementById("createTask").value
    const compled = document.getElementById("compled").value

    const newTaskObject = {title: newTaskTitle, compled: compled}

    createTask(newTaskObject)
})

newTrForTh.appendChild(ThId)
newTrForTh.appendChild(ThTitle)
newTrForTh.appendChild(ThCompleted)
table.appendChild(newTrForTh)
document.body.appendChild(table)
document.body.appendChild(ueberschrift)
document.body.appendChild(createTaskInputTitle)
document.body.appendChild(createTaskInputCompleted)
document.body.appendChild(newTaskButton)

const data = fetch("http://localhost:3000/tasks")
.then(function (data) {
    return data.json()
})
.then(function (json) {
    console.log(json)
    json.forEach(function(i) {
        let delteButtonFortask = document.createElement("button")
        delteButtonFortask.innerText = "delete"
        delteButtonFortask.addEventListener("click", () => deleteTask(i.id))

        //const link = document.createElement("a")
        //link.href = "http://127.0.0.1:5500/HTML/edit.html"

        let editButtonFortask = document.createElement("button")
        editButtonFortask.innerText = "edit"
        editButtonFortask.addEventListener("click", () => reroute(i.id))

        let newTrForContent = document.createElement("tr")
        let id = document.createElement("td")
        id.innerText = i.id

        let title = document.createElement("td")
        title.innerText = i.title

        let completed = document.createElement("td")
        completed.innerText = i.completed

        newTrForContent.appendChild(id)
        newTrForContent.appendChild(title)
        newTrForContent.appendChild(completed)
        newTrForContent.appendChild(delteButtonFortask)
        newTrForContent.appendChild(editButtonFortask)

        table.appendChild(newTrForContent)

        document.body.appendChild(table)
    })
})

//let testTask = {title: "Testtask", completed: false}
//createTask(testTask)


function createTask(newTask) {
    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
}

function deleteTask(taskID) {
    fetch(`http://localhost:3000/task/${taskID}`, {
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

//let updatedTask = {id: 1, title: "Livio", completed: true}
//updateTask(updatedTask)

function updateTask(updatedTask) {
    fetch("http://localhost:3000/tasks", {
        method:"PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    })
}

function reroute(id) {
    window.location = "/HTML/edit.html#" + id;
}