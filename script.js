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

//ekhane local theke task niye aschi and show kortesi.
const showTaskFromLocal = () => {
  localTask = getTaskFromLocal();

  localTask.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    list.append(li);
  });
}

const addTodoList = (e) => {
  e.preventDefault();

let userInput = input.value.trim();

  localTask = getTaskFromLocal();

if(userInput.length !== 0) {

  //array modhhe push kore pore local e save korychi.
  localTask.push(userInput);

  setTaskToLocal(localTask);

  // list.innerHTML += `<li>${userInput }</li>`
  
  const li = document.createElement("li");
  li.textContent = userInput ;
  list.append(li);
  input.value = "";
}
  
  

}

add_todo.addEventListener( 'click', (e) => {
addTodoList(e);
})

showTaskFromLocal();
