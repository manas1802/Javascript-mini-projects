const todoForm = document.getElementById("todo-form");
const addedTodos = document.getElementById("addedTodos");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoInput = document.getElementById("todoInput");

  if (todoInput.value === "") {
    alert("You need to write something");
    exit();
  }

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const imgTag = document.createElement("img");
  imgTag.src = "images/unchecked.png";
  imgTag.classList.add("todo-img");

  const pTag = document.createElement("p");
  pTag.innerHTML = todoInput.value;

  const span = document.createElement("span");
  span.innerHTML = "\u00d7";

  addedTodos.appendChild(todoDiv);
  todoDiv.appendChild(imgTag);
  todoDiv.appendChild(pTag);
  todoDiv.appendChild(span);

  todoInput.value = "";

  saveData();
  addEventListenersToTodo(todoDiv);
});

function addEventListenersToTodo(todoDiv) {
  const imgTag = todoDiv.querySelector(".todo-img");
  const pTag = todoDiv.querySelector("p");
  const span = todoDiv.querySelector("span");
  imgTag.addEventListener("click", () => {
    if (imgTag.src.endsWith("images/unchecked.png")) {
      imgTag.src = "images/checked.png";
      imgTag.nextElementSibling.style.textDecoration = "line-through";
      saveData();
    } else {
      imgTag.src = "images/unchecked.png";
      imgTag.nextElementSibling.style.textDecoration = "none";
      saveData();
    }
  });

  pTag.addEventListener("click", () => {
    console.log(pTag.style.textDecoration);
    if (pTag.style.textDecoration !== "line-through") {
      imgTag.src = "images/checked.png";
      pTag.style.textDecoration = "line-through";
      saveData();
    } else {
      imgTag.src = "images/unchecked.png";
      pTag.style.textDecoration = "none";
      saveData();
    }
  });

  span.addEventListener("click", () => {
    addedTodos.removeChild(todoDiv);
    saveData();
  });
}

function saveData() {
  localStorage.setItem("Data", addedTodos.innerHTML);
}

function getData() {
  addedTodos.innerHTML = localStorage.getItem("Data") || "";
  const todos = addedTodos.querySelectorAll(".todo");
  todos.forEach((todoDiv) => {
    addEventListenersToTodo(todoDiv);
  });
}

getData();