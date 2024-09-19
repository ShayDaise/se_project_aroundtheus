import { openModal } from "../pages/index.js";

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _setEventListeners() {
    const cardImage = this._cardElement.querySelector(".card__image");
    const likeButton = this._cardElement.querySelector(".card__like-button");
    const deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    cardImage.addEventListener("click", () => {
      this._handleImageClick();
    });
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button-active");
    });
    deleteButton.addEventListener("click", () => {
      this._cardElement.remove();
    });
    //
  }

  _handleImageClick() {
    const photoModal = document.querySelector("#photo-modal");
    const photoImg = photoModal.querySelector(".modal__picture");
    const photoText = photoModal.querySelector(".modal__photo-text");
    const cardImageElement = this._cardElement.querySelector(".card__image");
    const cardTitleElement = this._cardElement.querySelector(".card__title");
    photoText.textContent = cardTitleElement.textContent;
    photoImg.src = cardImageElement.src;
    photoImg.alt = cardTitleElement.textContent;
    openModal(photoModal);
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    const cardImageElement = this._cardElement.querySelector(".card__image");
    const cardTitleElement = this._cardElement.querySelector(".card__title");
    cardImageElement.src = this._link;
    cardImageElement.alt = this._link;
    cardTitleElement.textContent = this._name;
    //get the card view
    //set event listenders
    //return card
    this._setEventListeners();
    return this._cardElement;
  }
}

console.log();
