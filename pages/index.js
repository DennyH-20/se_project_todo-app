import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const TodoCounter = new TodoCounter();

const addTodoPopup = new PopupWithForm({ 
  popupSelector: "add-todo-popup", 
  handleFormSubmit: (evt) => {},  });
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  const todo = generateTodo(values);
  todosList.append(todo);
  closeModal(addTodoPopupEl);
  addTodoForm.reset();
addTodoPopup.setEventListeners()

const section = new Section({
  items: [initialTodos];
  renderer: () => {
    initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
  }),
  containerSelector: ".todos__list",
}});


section.renderItems();

//const openModal = (modal) => {
  //modal.classList.add("popup_visible");
//};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

function handleCheck() {
  TodoCounter.updatedCompleted(completed);
}

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck);
  const todoElement = todo.getView();

  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

addTodoCloseBtn.addEventListener("click", () => {
  addTodoPopup.close();
});

//addTodoForm.addEventListener("submit", (evt) => {
  //evt.preventDefault();
  //const name = evt.target.name.value;
  //const dateInput = evt.target.date.value;
  //const date = new Date(dateInput);
  //date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  //const id = uuidv4();
  //const values = { name, date, id };
  //const todo = generateTodo(values);
  //todosList.append(todo);
  //closeModal(addTodoPopupEl);
  //addTodoForm.reset();
//});

//initialTodos.forEach((item) => {
  //const todo = generateTodo(item);
  //todosList.append(todo);
//});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
