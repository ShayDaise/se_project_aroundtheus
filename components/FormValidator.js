export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputElements = [
      ...this._formElement.querySelectorAll(this._settings.inputSelector),
    ];
    this._submitButton = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
  }

  // Private method
  _showInputError(input) {
    const errorMessageSpan = this._formElement.querySelector(
      `.${input.id}-error`
    );
    input.classList.add(this._settings.inputErrorClass);
    errorMessageSpan.textContent = input.validationMessage;
    errorMessageSpan.classList.add(this._settings.errorClass);
  }

  // Private method
  _hideInputError(input) {
    const errorMessageSpan = this._formElement.querySelector(
      `.${input.id}-error`
    );
    input.classList.remove(this._settings.inputErrorClass);
    errorMessageSpan.textContent = "";
    errorMessageSpan.classList.remove(this._settings.errorClass);
  }

  // Private method
  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  // Private method
  _hasInvalidInput() {
    return !this._inputElements.every((inputEl) => inputEl.validity.valid);
  }

  // Private method
  _toggleButtonState() {
    if (
      this._hasInvalidInput() ||
      this._inputElements.some((input) => input.value.trim() === "")
    ) {
      this._submitButton.classList.add(this._settings.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._settings.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  // Private method
  _setEventListeners() {
    this._inputElements.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  // Public method
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this.resetValidation();
    });

    this._setEventListeners();
    this._toggleButtonState();
  }

  // Public method
  resetValidation() {
    this._inputElements.forEach((input) => {
      this._hideInputError(input);
    });
    this._toggleButtonState();
  }
}
