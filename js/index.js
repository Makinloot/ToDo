const input = document.getElementById("input");
let value = input.value;
const wrapper = document.querySelector(".list__wrapper");
// LOADS DATA FROM LOCAL STORAGE ON LOAD
document.addEventListener("DOMContentLoaded", returnLocalStorage);
// SUBMITS LIST ON ENTER CLICK IN INPUT
input.addEventListener('keyup', (e) => {
  e.preventDefault();
  if(e.keyCode == 13){
    addToDo();
  }
})
// ADDS PLAN IN TODO LIST
function addToDo() {
  const error = document.getElementById("error");
  let value = input.value;
  // IF INPUT VALUE IS EMPTY WILL NOT ADD LIST ITEM
  if (input.value == "") {
    error.innerText = "List is empty!";
  } else {
    saveToLocalStorage(value);
    createListItem(value);
    error.innerText = "";
  }
}
// CREATES LIST ITEM
function createListItem(listValue) {
  let value = input.value;
  const li = document.createElement("li");
  li.classList.add("list__item");
  li.innerHTML = `
    <p class='list__paragraph'>${listValue}</p>
    <button class='button list__delete'>
        <img src='images/delete.png' alt='delete-icon'>
    </button>
  `;
  wrapper.append(li);
  // GIVES DELETE BUTTON FUNCTION TO DELETE LIST
  const delBtn = li.getElementsByClassName("list__delete")[0];
  delBtn.addEventListener("click", () => {
    deleteListItem(wrapper, li);
  });
  input.value = "";
}

// DELETES LIST ITEM
function deleteListItem(parent, child) {
  removeLocalStorage(wrapper);
  parent.removeChild(child);
}
// CLEARS EVERY LIST ITEM FROM LIST
function resetList() {
  removeLocalStorage(wrapper);
  wrapper.innerHTML = "";
}
// SAVES DATA TO LOCAL STORAGE
function saveToLocalStorage(value) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(value);
  localStorage.setItem("todos", JSON.stringify(todos));
}
// DISPLAYS DATA ON SCREEN FROM LOCAL STORAGE
function returnLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    createListItem(todo);
  });
}
// REMOVES SAVED DATA IN LOCAL STORAGE
function removeLocalStorage(parent) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const wrapperOfChild = parent.children[0].innerText;
  const wrapperChildren = wrapper.childNodes.length;
  todos.splice(todos.indexOf(wrapperOfChild), wrapperChildren);
  localStorage.setItem("todos", JSON.stringify(todos));
}
