import {addDataLike, removeDataCard, removeDataLike} from "./api";

const cardTemplate = document.querySelector("#card-template").content;
function removeCard(evt, cardId) {
    const card = evt.target.closest(".card");
    removeDataCard(cardId)
        .then(() => card.remove())
        .catch((err) => alert("Статус ошибки:"+ (err)))
}

export function createCard(card,openPhoto, id) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const likeButton = cardElement.querySelector('.card__like-button')
    const deleteButton = cardElement.querySelector(".card__delete-button")
    const imagePopup = cardElement.querySelector(".card__image")
    const likeCounter = cardElement.querySelector(".like_counter")

    cardElement.querySelector(".card__title").textContent = card.name;
    cardElement.querySelector(".card__image").src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;

    let isMyCard = id === card.owner._id

    if (!isMyCard){
        deleteButton.style.visibility = 'hidden'
    }

    likeCounter.textContent = card.likes.length

    if (hasLiked(card, id)) {
        likeButton.classList.add("card__like-button_is-active");
    }

    deleteButton.addEventListener("click",(evt) => removeCard(evt, card._id));

    likeButton.addEventListener('click',(evt) => likeCard(evt, card._id ,likeButton, likeCounter));

    imagePopup.addEventListener('click', () => openPhoto(card))

    return(cardElement)
}

function hasLiked(card, id) {
    return card.likes.some((el) => el._id === id)
}

function likeCard(evt, id, likeButton, likeCounter) {
    const likeMethod = evt.target.classList.contains("card__like-button_is-active")
        ? removeDataLike
        : addDataLike;
    likeMethod(id)
        .then((updateCard) => {
            likeButton.classList.toggle("card__like-button_is-active");
            likeCounter.textContent = updateCard.likes.length;
        })
        .catch((err) => console.error(err))
}
