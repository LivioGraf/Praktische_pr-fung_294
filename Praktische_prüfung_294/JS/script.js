const table = document.createElement("table")
const newTr = document.createElement("tr")

const ThId = document.createElement("th")
ThId.innerText = "ID"

const ThTitle = document.createElement("th")
ThTitle.innerText = "Title"



newTr.appendChild(ThId)
newTr.appendChild(ThTitle)
table.appendChild(newTr)
document.body.appendChild(table)

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

//let testTask = {id: 2, title: "Testtask", completed: false}
//postRequest(testTask)


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
    fetch(`http://localhost:3000/tasks/${taskID}`, {
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}