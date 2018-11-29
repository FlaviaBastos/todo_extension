'use strict'

function addNewTask() {
  alert(`Didn't add a task!`)
}

function taskToBeAdded() {
  let todoItem = document.createElement('li')
  todoItem.appendChild(document.createTextNode(this.value))
  todosList.appendChild(todoItem)
}

const newTask = document.querySelector('.task')
const addNew = document.querySelector('#addNew')
// const fullList = document.querySelector('.content')
const todosList = document.querySelector('ul')

newTask.addEventListener('change', taskToBeAdded)
addNew.addEventListener('click', addNewTask)
