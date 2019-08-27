'use strict'

document.addEventListener('DOMContentLoaded', function (event) {
  displayItems()
})

function addNewTask () {
  let text = newTask.value
  let task = {
    text: text,
    done: false
  } 
  saveItem(task)
  newTask.value = '';
}

function saveItem (item) {
  chrome.storage.sync.get('todoList', function(data) {
    data.todoList.push(item)
    chrome.storage.sync.set(data, displayItems)
  })
}

function displayItems () {
  chrome.storage.sync.get('todoList', function(data) {
    let displayList = data.todoList;
    if (typeof displayList !== 'undefined') {
      todosList.innerHTML = displayList.map((item, i) => {
        return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" 
             ${item.done ? 'checked' : ''} />
            <label for="item${i}">
              ${item.done ? `<del>${item.text}</del>` : item.text}
            </label>
          </li>
        `;
      }).join('');
    } else {
      chrome.storage.sync.set({todoList: []})
    }
  })
}

function toggleDone(e) {
  const el = e.target;
  const index = el.dataset.index;
  chrome.storage.sync.get('todoList', function(data) {
    let list = data.todoList;
    list[index].done = !list[index].done;
    chrome.storage.sync.set(data, displayItems)
  })
}

function reset() {
    chrome.storage.sync.remove('todoList', function(data){
      todosList.innerHTML = ''
    })
}

const newTask = document.querySelector('.task')
const addNew = document.querySelector('#addNew')
const resetList = document.querySelector('#deleteList')
const todosList = document.querySelector('.items')

addNew.addEventListener('click', addNewTask);
resetList.addEventListener('click', reset);
todosList.addEventListener('click', toggleDone);
