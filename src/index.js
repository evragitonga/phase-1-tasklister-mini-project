document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let formInput = document.querySelector('#new-task-description')
    formInput.value = 'Wash the dishes' 
    function buildToDo(){
      let li = document.createElement('li')
      li.textContent = formInput.value
      let taskList = document.querySelector('#tasks')
      taskList.append(li)
    }
    buildToDo()
  })
});
