const editButton = document.querySelector(".profile__edit-button");
const addDestinationBtn = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-card-modal");
const editModal = document.querySelector("#edit-modal");
const editModalCloseButton = editModal.querySelector(".modal__close");
const cardCloseBtn = addCardModal.querySelector(".modal__close");
const profileTitile = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalDescInput = document.querySelector("#modal-description-input");
const modalTitleInput = document.querySelector("#modal-title-input");
const profileEditForm = editModal.querySelector(".modal__form");
const cardTitleInput = addCardModal.querySelector(".modal__input_type_title");
const cardImageInput = addCardModal.querySelector(".modal__input_type_url");
const cardAddForm = addCardModal.querySelector(".modal__form");
const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;
const photoModal = document.querySelector("#photo-modal");
const photoCloseBtn = photoModal.querySelector(".modal__close");
const photoImg = photoModal.querySelector(".modal__picture");
const photoText = photoModal.querySelector(".modal__photo-text");

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

  cardImageElement.addEventListener("click", () => {
    photoText.textContent = cardTitleElement.textContent;
    photoImg.src = cardImageElement.src;
    openModal(photoModal);
  });
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
  const name = cardTitleInput.value;
  const link = cardImageInput.value;
  renderCard({ name, link }, cardList);
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
editModalCloseButton.addEventListener("click", () => closePopUp(editModal));
cardCloseBtn.addEventListener("click", () => closePopUp(addCardModal));
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handlePhotoSubmit);
photoCloseBtn.addEventListener("click", () => closePopUp(photoModal));

initialCards.forEach((cardData) => {
  renderCard(cardData, cardList);
});
