class Popup {
    constructor( popupSelector ) {
        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    }

    _handleExcapeClose(evt) {
        if (evt.key === "escape") {
            this.close();
        }
    }

    open() {
        this._popupElement.classList.add("popup_visible");
        document.addEventListener("keyup", handleEscapeClose);
    }

    close() {
        this._popupElement.classList.remove("popup_visible");
        document.removeEventListener("keyup", handleEscapeClose);
    }

    setEventListeners() {
        this._popupCloseBtn.addEventListener("click", () => {
            this.close(); 
        })
    }
}
export default Popup;