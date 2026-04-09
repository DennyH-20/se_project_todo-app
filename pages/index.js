import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const dateInput = evt.target.date.value;
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    
    const id = uuidv4();
    const values = { name, date, id };
    const todo = generateTodo(values);
    section.addItem(todo);  // Use section.addItem instead of direct DOM
    addTodoPopup.close();
    addTodoForm.reset();
  }
});



const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const handleCheck = (checked) => {
  todoCounter.updateCompleted(checked);
};

//function handleCheck() {
  //todoCounter.updatedCompleted(checked);
//}

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck);
  const todoElement = todo.getView();

  return todoElement;
};

const section = new Section({
  title: "Todos",
  items: initialTodos,
  renderer: (item) => {
    const el = generateTodo(item);
    section.addItem(el);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

addTodoCloseBtn.addEventListener("click", () => {
  addTodoPopup.close();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
