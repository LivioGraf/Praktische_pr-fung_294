const table = document.createElement("table")
const newTrForTh = document.createElement("tr")

const ThId = document.createElement("th")
ThId.innerText = "ID"

const ThTitle = document.createElement("th")
ThTitle.innerText = "Title"

const ThCompleted = document.createElement("th")
ThCompleted.innerText = "Completed"


newTrForTh.appendChild(ThId)
newTrForTh.appendChild(ThTitle)
newTrForTh.appendChild(ThCompleted)
table.appendChild(newTrForTh)
document.body.appendChild(table)

function readTask() {
    const data = fetch("http://localhost:3000/tasks")
    .then(function (data) {
        return data.json()
    })
    .then(function (json) {
        console.log(json)
        for (i of json) {
            let id = document.createElement("p")
            id.innerText = i.id

            let title = document.createElement("p")
            title.innerText = i.title

            let completed = document.createElement("p")
            completed.innerText = i.completed

            document.body.appendChild(id)
            document.body.appendChild(title)
            document.body.appendChild(completed)
        }
    })
}

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