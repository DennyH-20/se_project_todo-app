import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({popupSelector});
    this._popupElement = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    const values = {};
    this._inputList.forEach((input) => {
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {});
    evt.preventDefault(evt);
    this._handleFormSubmit();
  }
}
export default PopupWithForm;
