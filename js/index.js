const input = document.getElementById("input");
const wrapper = document.querySelector(".list__wrapper");

function addToDo() {
  // IF INPUT VALUE IS EMPTY WILL NOT ADD LIST ITEM
  if (input.value == "") {
    console.log("red");
  } else {
    createListItem();
  }
};

// CREATES LIST ITEM
function createListItem() {
  let value = input.value;
  const deleteClass = 'list__delete';
  const li = document.createElement('li');
  li.classList.add('list__item');
  li.innerHTML = `
    <p class='list__paragraph'>${value}</p>
    <button class='button list__delete'>
        <img src='images/delete.png' alt='delete-icon'>
    </button>
  `;
  deleteClass.add
  wrapper.append(li);
// GIVES DELETE BUTTON FUNCTION TO DELETE LIST
  const delBtn = li.getElementsByClassName('list__delete')[0];
  delBtn.addEventListener('click', () => {
    deleteListItem(wrapper, li);
  });
  input.value = "";
};

// DELETES LIST ITEM
function deleteListItem(parent, child) {
  parent.removeChild(child);
};
// CLEARS EVERY LIST ITEM FROM LIST
function resetList() {
  wrapper.innerHTML = '';
}