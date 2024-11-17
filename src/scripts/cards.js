const cardTemplate = document.querySelector("#card-template").content;

export function removeCard(evt) {
    const card = evt.target.closest(".card");
    card.remove();
}

export function handleCardLike(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active')
}

export function createCard(name, link, openPhoto, popupPhoto) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const likeButton = cardElement.querySelector('.card__like-button')
    const deleteButton = cardElement.querySelector(".card__delete-button");
    const imagePopup = cardElement.querySelector(".card__image")

    cardElement.querySelector(".card__title").textContent = name;
    cardElement.querySelector(".card__image").src = link;
    cardElement.querySelector('.card__image').alt = name;

    deleteButton.addEventListener("click", removeCard);
    likeButton.addEventListener('click',() => handleCardLike(likeButton));

    imagePopup.addEventListener('click', () =>
        openPhoto(popupPhoto ,name , link))

    return(cardElement)
}






