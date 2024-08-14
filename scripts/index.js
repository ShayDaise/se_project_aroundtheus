const editButton = document.querySelector(".profile__edit-button");
const modalContainer = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");
const profileTitile = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalDescInput = document.querySelector("#modal-description-input");
const modalTitleInput = document.querySelector("#modal-title-input");
const profileEditForm = modalContainer.querySelector(".modal__form");
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
function closePopUp() {
  modalContainer.classList.remove("modal_opened");
}
function getCardElement(cardData) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  // clone the template element with all its content and store it in a cardElement variable
  // access the card title and image and store them in variables
  // set the path to the image to the link field of the object
  // set the image alt text to the name field of the object
  // set the card title to the name field of the object, too
  // return the ready HTML element with the filled-in data
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");

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
  closePopUp();
}
// Event Listeners----------------------------------------------------------------
editButton.addEventListener("click", function () {
  modalDescInput.value = profileDescription.textContent;
  modalTitleInput.value = profileTitile.textContent;
  modalContainer.classList.add("modal_opened");
});

modalCloseButton.addEventListener("click", closePopUp);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.prepend(cardElement);
});
