const editButton = document.querySelector(".profile__edit-button");
const addDestinationBtn = document.querySelector(".profile__add-button");
const photoModal = document.querySelector("#photo-modal");
const editModal = document.querySelector("#edit-modal");
const editModalCloseButton = editModal.querySelector(".modal__close");
const photoCloseBtn = photoModal.querySelector(".modal__close");
const profileTitile = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalDescInput = document.querySelector("#modal-description-input");
const modalTitleInput = document.querySelector("#modal-title-input");
const profileEditForm = editModal.querySelector(".modal__form");
const photoTitleInput = photoModal.querySelector(".modal__input_type_title");
const photoImageInput = photoModal.querySelector(".modal__input_type_url");
const photoAddForm = photoModal.querySelector(".modal__form");
const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

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

// functions----------------------------------------------------------------------
function closePopUp(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function renderCard(cardData, list) {
  const cardElement = getCardElement(cardData);

  list.prepend(cardElement);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button-active");
  });

  cardTitleElement.textContent = cardData.name;
  cardImageElement.setAttribute("alt", `${cardData.name}`);
  cardImageElement.setAttribute("src", `${cardData.link}`);
  return cardElement;
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
  const name = photoTitleInput.value;
  const link = photoImageInput.value;
  renderCard({ name, link }, cardList);
  photoTitleInput.value = "";
  photoImageInput.value = "";
  closePopUp(photoModal);
}

// Event Listeners----------------------------------------------------------------
editButton.addEventListener("click", () => {
  modalDescInput.value = profileDescription.textContent;
  modalTitleInput.value = profileTitile.textContent;
  openModal(editModal);
});
addDestinationBtn.addEventListener("click", () => openModal(photoModal));
editModalCloseButton.addEventListener("click", () => closePopUp(editModal));
photoCloseBtn.addEventListener("click", () => closePopUp(photoModal));
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
photoAddForm.addEventListener("submit", handlePhotoSubmit);

initialCards.forEach((cardData) => {
  renderCard(cardData, cardList);
});
