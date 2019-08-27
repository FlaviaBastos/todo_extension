'use strict'

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.get('todoList', function(data) {
    console.log(`CURRENT TODOS - bckg: ${JSON.stringify(data)}`)
  })
})
