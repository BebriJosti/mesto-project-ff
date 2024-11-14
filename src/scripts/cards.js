import {openModal} from "./modal";

const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".places__list");
const cardName = document.querySelector('.popup__input_type_card-name')
const cardSrc = document.querySelector('.popup__input_type_url')


export function removeCard(evt) {
    const card = evt.target.closest(".card");
    card.remove();
}

export function handleCardLike(likeButton) {
     likeButton.classList.toggle('card__like-button_is-active')
}

export function createCard(name, link, isLiked) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector('.card__like-button')
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector('.card__image').alt = name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  const imagePopup = cardElement.querySelector(".card__image")

  deleteButton.addEventListener("click", removeCard);
  likeButton.addEventListener('click',() => handleCardLike(likeButton));
  imagePopup.addEventListener('click', (event) =>
      openModal(".popup_type_image", event.target.currentSrc, event.target.alt))

  cardsContainer.prepend(cardElement);
}

export function handleCardAdd(evt) {
    evt.preventDefault();
    return({name: cardName.value, src: cardSrc.value});
}




