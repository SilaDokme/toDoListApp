const todoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");

const alertWaarning = document.querySelector(".alert-warning");
const alertSuccess = document.querySelector(".alert-success");

//Events
toDoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck)


//Function
function addTodo(e) {
  e.preventDefault();

  if (todoInput.value === "") {
    alertWaarning.style.display = "block";
    setTimeout(() => {
      alertWaarning.style.display = "none";
    }, 3000);

    //clear todo input value
    todoInput.value = "";
  } else {
    alertSuccess.style.display = "block";
    setTimeout(() => {
      alertSuccess.style.display = "none";
    }, 3000);

    // create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //check mark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";
  }
}

function deleteCheck(e){
  const item = e.target


  //? delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocaleStorage(todo)
    todo.addEventListener("transitionend", function () {
        todo.remove();
    })
  }
}
