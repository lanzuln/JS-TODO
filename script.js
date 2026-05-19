const list = document.querySelector("#todo_lists");
const input = document.querySelector("#todo-input");
const add_todo = document.querySelector("#btn");

let localTask = [];

//Set task to local storage
const setTaskToLocal= (task) => {
  return localStorage.setItem("ln-task", JSON.stringify(task));
}

//get task from local storage
const getTaskFromLocal = () => {
  return JSON.parse(localStorage.getItem("ln-task")) || [];
}

const addTodoList = (e) => {
  e.preventDefault();

let userInput = input.value.trim();

  localTask = getTaskFromLocal();

if(userInput.length !== 0) {

  localTask.push(userInput);

  setTaskToLocal(localTask);

  // list.innerHTML += `<li>${userInput }</li>`
  
  const li = document.createElement("li");
  li.innerHTML = userInput ;
  list.append(li);
}
  
  

}
add_todo.addEventListener( 'click', (e) => {
addTodoList(e);
})