const config = {
  formSelector: ".popup__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
function showInputError(form, input, { inputErrorClass, errorClass }) {
  const errorMessageSpan = form.querySelector(`.${input.id}-error`);
  input.classList.add(inputErrorClass);
  errorMessageSpan.textContent = input.validationMessage;
  errorMessageSpan.classList.add(errorClass);
}

function hideInputError(form, input, { inputErrorClass, errorClass }) {
  const errorMessageSpan = form.querySelector(`.${input.id}-error`);
  input.classList.remove(inputErrorClass);
  errorMessageSpan.textContent = "";
  errorMessageSpan.classList.remove(errorClass);
}

function checkInputValidity(form, input, config) {
  if (!input.validity.valid) {
    showInputError(form, input, config);
  } else {
    hideInputError(form, input, config);
  }
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
}

function toggleButtonState(
  inputElements,
  submitButton,
  { inactiveButtonClass }
) {
  if (hasInvalidInput(inputElements)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
  }
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

function setEventListensers(form, config) {
  const { inputSelector, submitButtonSelector } = config;
  const inputElements = [...form.querySelectorAll(inputSelector)];
  const submitButton = form.querySelector(submitButtonSelector);

  inputElements.forEach((input) => {
    input.addEventListener("input", (evt) => {
      checkInputValidity(form, input, config);
      toggleButtonState(inputElements, submitButton, config);
    });
  });
  console.log(inputElements);
}

function enableValidation(config) {
  const formElements = [...document.querySelectorAll(config.formSelector)];

  formElements.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListensers(form, config);
  });
}

console.log();

enableValidation(config);
