# Basic To Do List Concept

Ei project-er main idea holo user theke task neya, oi task screen-e dekhano, complete kora, delete kora, and completed task clear kora.

## 1. HTML Ki Korche

HTML app-er structure banay.

- `form` er moddhe input and Add button ache.
- `ul` er moddhe JavaScript diye task gula add hoy.
- `span` diye baki task count dekhano hoy.
- `button` diye completed task clear kora hoy.

## 2. CSS Ki Korche

CSS app-er design banay.

- `.todo-panel` diye main white box banano hoy.
- `.todo-left` left side form area.
- `.todo-right` right side task list area.
- `.todo-item` ekta single task row design kore.
- `.completed` class thakle task-er text line-through hoy.

## 3. JavaScript Ki Korche

JavaScript app-er behavior control kore.

- `todos` array te shob task save thake.
- `addTodo()` new task add kore.
- `renderTodos()` array theke task list screen-e draw kore.
- `toggleTodo()` task complete/incomplete kore.
- `deleteTodo()` ekta task remove kore.
- `clearCompleted()` completed task gula remove kore.
- `updateTaskCount()` baki task count update kore.

## 4. Flow Ta Mone Rakho

1. User input-e task likhe.
2. Add button press korle form submit hoy.
3. JavaScript input value ney.
4. New task `todos` array te push hoy.
5. `renderTodos()` screen update kore.

## 5. Practice Ideas

- Empty input dile alert show koro.
- Delete button-er text `X` kore dekho.
- Task list-er color change koro.
- Browser refresh korleo task thakar jonno `localStorage` add koro.

Ei project basic rakha hoyeche, tai age ei flow-ta clearly bujho. Tarpor chaile localStorage, edit task, filter button add korte paro.
