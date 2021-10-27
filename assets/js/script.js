// Select Element
let form = document.querySelector('#form');
let newTaskInput = document.querySelector('#new-task');
let addTaskBtn = document.querySelector('#addTask');
let itemsUl = document.querySelector('#items');
let completeListUl = document.querySelector('.complete-list ul');

const createTask = function (textVal) {
  let listItem = document.createElement('li');
  let checkbox = document.createElement('input');
  let label = document.createElement('label');
  checkbox.type = 'checkbox';
  label.innerText = textVal;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  return listItem;
};

const addTask = function (e) {
  e.preventDefault();
  let listItem = createTask(newTaskInput.value);

  listItem.querySelector('label').innerText == ''
    ? alert('Please Enter name or any text!')
    : itemsUl.appendChild(listItem);

  completeTask(listItem);
};

const completeTask = function (listItem) {
  let inputCheckBox = listItem.querySelector('input[type="checkbox"]');
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.className = 'delete';

  inputCheckBox.addEventListener('change', function () {
    this.checked = 0;
    listItem.appendChild(deleteBtn);
    completeListUl.appendChild(this.parentElement);
    this.remove();
  });

  deleteBtn.addEventListener('click', function () {
    this.parentElement.remove();
  });
};

for (let i = 0; i < itemsUl.children.length; i++) {
  let listItem = itemsUl.children[i];
  let inputCheckBox = listItem.querySelector('input[type="checkbox"]');
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.className = 'delete';

  inputCheckBox.addEventListener('change', function () {
    this.checked = 0;
    listItem.appendChild(deleteBtn);
    completeListUl.appendChild(this.parentElement);
    this.remove();
    ulChildRemove();
  });
}

function ulChildRemove() {
  for (let i = 0; i < completeListUl.children.length; i++) {
    let listItem = completeListUl.children[i];
    let deleteBtn = listItem.querySelector('button');

    deleteBtn.addEventListener('click', function () {
      this.parentElement.remove();
    });
  }
}
ulChildRemove();

form.addEventListener('submit', addTask);
