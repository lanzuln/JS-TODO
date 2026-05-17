const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const taskCount = document.querySelector("#task-count");
const emptyMessage = document.querySelector("#empty-message");
const clearCompletedButton = document.querySelector("#clear-completed");

let todos = [];

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = "todo-item";

    if (todo.completed) {
      item.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    item.append(checkbox, text, deleteButton);
    list.appendChild(item);
  });

  updateTaskCount();
}

function addTodo(text) {
  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  todos.push(newTodo);
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }

    return todo;
  });

  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function clearCompleted() {
  todos = todos.filter((todo) => !todo.completed);
  renderTodos();
}

function updateTaskCount() {
  const incompleteTasks = todos.filter((todo) => !todo.completed).length;
  const label = incompleteTasks === 1 ? "task" : "tasks";

  taskCount.textContent = `${incompleteTasks} ${label} left`;
  emptyMessage.classList.toggle("hidden", todos.length > 0);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoText = input.value.trim();

  if (todoText === "") {
    return;
  }

  addTodo(todoText);
  input.value = "";
  input.focus();
});

clearCompletedButton.addEventListener("click", clearCompleted);

renderTodos();
