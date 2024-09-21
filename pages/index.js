import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
const editButton = document.querySelector(".profile__edit-button");
const modals = [...document.querySelectorAll(".modal")];
const page = document.querySelector(".page");
const addDestinationBtn = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-card-modal");
const editModal = document.querySelector("#edit-modal");
const profileTitile = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalDescInput = document.querySelector("#modal-description-input");
const modalTitleInput = document.querySelector("#modal-title-input");
const profileEditForm = editModal.querySelector(".modal__form");
const cardTitleInput = addCardModal.querySelector(".modal__input_type_title");
const cardImageInput = addCardModal.querySelector(".modal__input_type_url");
const cardAddForm = addCardModal.querySelector(".modal__form");
const cardList = document.querySelector(".cards__list");
const photoModal = document.querySelector("#photo-modal");
const photoImg = photoModal.querySelector(".modal__picture");
const photoText = photoModal.querySelector(".modal__photo-text");

const cardSelector = "#card-template";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Lousie",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// functions---------------------------------------------------------------------
function handleImageClick(name, link) {
  photoText.textContent = name;
  photoImg.src = link;
  photoImg.alt = name;
  openModal(photoModal);
}

function closeAnyModal() {
  modals.forEach((modal) => closePopUp(modal));
}

function handleCloseWithEsc(evt) {
  if (evt.key === "Escape") {
    closeAnyModal();
    console.log(evt.key);
  }
}

function handleModalClose(evt) {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__close")
  ) {
    closeAnyModal();
  }
}

function closePopUp(modal) {
  modal.classList.remove("modal_opened");
  page.removeEventListener("keydown", handleCloseWithEsc);
}

export function openModal(modal) {
  modal.classList.add("modal_opened");
  page.addEventListener("keydown", handleCloseWithEsc);
}

function createCard(cardData, cardSelector, handleImageClick) {
  const cardElement = new Card(cardData, cardSelector, handleImageClick);
  const card = cardElement.getView();
  return card;
}

function renderCard(cardData, cardSelector, list, handleImageClick) {
  const card = createCard(cardData, cardSelector, handleImageClick);

  list.prepend(card);
}

// Event Handlers-----------------------------------------------------------------
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileDescription.textContent = modalDescInput.value;
  profileTitile.textContent = modalTitleInput.value;
  console.log("submitted");
  closePopUp(editModal);
}

function handlePhotoSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardImageInput.value;
  renderCard({ name, link }, cardSelector, cardList, handleImageClick);
  cardTitleInput.value = "";
  cardImageInput.value = "";
  closePopUp(addCardModal);
}

// Event Listeners----------------------------------------------------------------
editButton.addEventListener("click", () => {
  modalDescInput.value = profileDescription.textContent;
  modalTitleInput.value = profileTitile.textContent;
  openModal(editModal);
});
addDestinationBtn.addEventListener("click", () => openModal(addCardModal));
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handlePhotoSubmit);
editModal.addEventListener("mousedown", handleModalClose);
addCardModal.addEventListener("mousedown", handleModalClose);
photoModal.addEventListener("mousedown", handleModalClose);

initialCards.forEach((cardData) => {
  renderCard(cardData, cardSelector, cardList, handleImageClick);
});

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const forms = document.querySelectorAll(config.formSelector);
forms.forEach((form) => {
  const formValidator = new FormValidator(config, form);
  formValidator.enableValidation();
});
