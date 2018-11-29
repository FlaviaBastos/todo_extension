'use strict'

// chrome.storage.sync.get('color', function (data) {
//   alert(`COLOR IS... ${JSON.stringify(data)}`)
//   changeColor.style.backgroundColor = data.color
//   changeColor.setAttribute('value', data.color)
// })


function addNewTask() {
  alert(`Didn't add a task!`)
}

function taskToBeAdded() {
  alert(`TASK: ${this.value}`)
  fullList.innerHTML = this.value
}

const newTask = document.querySelector('.task')
const addNew = document.querySelector('#addNew')
const fullList = document.querySelector('.content')

newTask.addEventListener('change', taskToBeAdded)
addNew.addEventListener('click', addNewTask)
