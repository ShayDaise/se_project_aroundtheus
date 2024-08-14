const editButton = document.querySelector(".profile__edit-button");
const modalContainer = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");
const profileTitile = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalDescInput = document.querySelector("#modal-description-input");
const modalTitleInput = document.querySelector("#modal-title-input");
const profileEditForm = modalContainer.querySelector(".modal__form");

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
  modalContainer.setAttribute("style", "display: none");
}

// Event Handlers-----------------------------------------------------------------
function HandleProfileEditSubmit(e) {
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
  modalContainer.setAttribute("style", "display: flex");
});

modalCloseButton.addEventListener("click", closePopUp());

profileEditForm.addEventListener("submit", HandleProfileEditSubmit);
