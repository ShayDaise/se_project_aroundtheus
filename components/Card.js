export class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this.handleImageClick = handleImageClick;
  }
  _setEventListeners() {
    const cardImage = this._cardElement.querySelector(".card__image");
    const likeButton = this._cardElement.querySelector(".card__like-button");
    const deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    cardImage.addEventListener("click", () => {
      this.handleImageClick(this._name, this._link);
    });
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button-active");
    });
    deleteButton.addEventListener("click", () => {
      this._cardElement.remove();
    });
    //
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
