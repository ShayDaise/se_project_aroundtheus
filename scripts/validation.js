const config = {
  formSelector: ".popup__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function setEventListensers(form, config) {
  const { inputSelector } = config;
  const inputElements = [...form.querySelectorAll(inputSelector)];

  inputElements.forEach((input) => {
    input.addEventListener("input", () => {});
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
