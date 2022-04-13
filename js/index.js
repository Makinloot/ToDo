const input = document.getElementById("input");
const wrapper = document.querySelector(".list__wrapper");

function addToDo() {
  // IF INPUT VALUE IS EMPTY WILL NOT ADD LIST ITEM
  if (input.value == "") {
    console.log("red");
  } else {
    createListItem();
  }
}

// CREATES LIST ITEM
function createListItem() {
  let value = input.value;
  const li = document.createElement("li");
  // CREATES ELEMENTS FOR LIST ITEM
  li.classList.add("list__item");
  li.innerHTML = `
        <p class="list__paragraph">${value}</p>
        <button class="button list__delete">
            <img src="images/delete.png" alt="delete-icon">
        </button>`;
  wrapper.append(li);
  input.value = "";
}
