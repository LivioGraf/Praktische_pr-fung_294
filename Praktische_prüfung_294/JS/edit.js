const taskID = window.location.hash
var getID = taskID.match(/(\d+)/)[0]

getTask(getID)

function getTask(id) {
    const data = fetch(`http://localhost:3000/task/${id}`)
    .then(function (data) {
        return data.json()
    })
    .then(function (json) {
        const titleInput = document.getElementById("title")
        const completed = document.getElementById("completed")

        titleInput.value = json.title
        completed.value = json.completed

        const submitButton = document.getElementById("submitButton")
        submitButton.addEventListener("click", () => updateTask(id))
    })
}

function updateTask(id) {

    const newTitleInput = document.getElementById("title")
    const newCompletedInput = document.getElementById("completed")

    const newTitle = newTitleInput.value
    const newCompleted = newCompletedInput.value

    const editTask = {id: id, title: newTitle, completed: newCompleted}

    fetch("http://localhost:3000/tasks", {
        method:"PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editTask)
    })

    window.location = "/HTML/";
}