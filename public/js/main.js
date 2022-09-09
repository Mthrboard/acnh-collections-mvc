/* const deleteBtn = document.querySelectorAll('.del') */
const todoItem = document.querySelectorAll('div.false')
const todoComplete = document.querySelectorAll('div.true')

/* Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
}) */

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', addDivId)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', removeDivId)
})

async function addDivId(){
  const userId = document.querySelector('h2[data-user-id]').dataset.userId
  const divId = this.id
  try {
    await fetch('todos/addDivId', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
        divId: divId
      })
    })
    location.reload()
  } catch(err) {
    console.log(err)
  }
}

async function removeDivId(){
  const userId = document.querySelector('h2[data-user-id]').dataset.userId
  const divId = this.id
  try {
    await fetch('todos/removeDivId', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
        divId: divId
      })
    })
    location.reload()
  } catch(err) {
    console.log(err)
  }
}

/* async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
} */

/* async function markComplete(){
    const itemId = this.id
    try{
        const response = await fetch('todos/createTodo', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body:
            ({
                'completeIdFromJSFile': this.id
            })
        })
        const data = await response.json()
        console.log(this.id)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
    console.log(`${this.id} "MarkIncomplete"`)
} */