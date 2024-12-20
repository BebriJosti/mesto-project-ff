import './pages/index.css';
import {createCard} from "./scripts/cards";
import { openModal, closeModal} from "./scripts/modal";
import {enableValidation, clearValidation} from "./scripts/validation"
import {addDataCard, editDataAvatar, editProfile, getCards, getProfile} from "./scripts/api";

// Поиск попапов
const popupAddCard = document.querySelector('.popup_type_new-card')
const popupProfile = document.querySelector('.popup_type_edit')
const popupPhoto = document.querySelector(".popup_type_image")
//Поиск кнопок
const addButtonCard = document.querySelector(".profile__add-button")
const editButtonProfile = document.querySelector(".profile__edit-button")
const closeButtonInNewCard = document.querySelector(".popup_type_new-card")
    .querySelector(".popup__close")
const closeButtonProfile = document.querySelector(".popup_type_edit")
    .querySelector(".popup__close")
const imagePopupCloseButton = document.querySelector(".popup_type_image")
    .querySelector(".popup__close")
const avatarPopupCloseButton = document.querySelector(".popup_type_avatar-edit")
    .querySelector(".popup__close")

const cardsContainer = document.querySelector(".places__list");
const nameInput =  document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')
const profileAvatar = document.querySelector('.profile__image')
const editAvatarButton = document.querySelector(".profile__image__edit-button")
const editAvatarPopup = document.querySelector(".popup_type_avatar-edit");
let userId = null;

Promise.all([getProfile(), getCards()])
    .then(([profileInfo, initialCards]) => {
        setProfile(profileAvatar, profileTitle, profileDescription, profileInfo);
        userId = profileInfo._id;
        setCards(initialCards, userId);
    })
    .catch((err) => {
        alert("Статус ошибки:" + err.status);
    });

 const popupSelectors = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButton: ".popup__button",
    inactiveButton: "popup__button-disabled",
    inputError: "popup__input_type-error",
};

// навешивание слушателей событий
addButtonCard.addEventListener('click', function() {
    openAddCardModal(popupAddCard);
     clearValidation(popupAddCard, popupSelectors)
});

editButtonProfile.addEventListener('click', () => {
    openChangeProfileModal(popupProfile)
})
// кнопки закрытия модального окна
closeButtonInNewCard.addEventListener('click', () => closeModal(popupAddCard))
closeButtonProfile.addEventListener('click', () => closeModal(popupProfile))
imagePopupCloseButton.addEventListener('click', () => closeModal(popupPhoto))
avatarPopupCloseButton.addEventListener('click', () =>closeModal(editAvatarPopup) )

popupProfile.querySelector('form').addEventListener('submit',function (evt)  {
    handleProfileEdit(evt)
    closeModal(popupProfile)
})

popupAddCard.querySelector('form').addEventListener('submit', function (evt){
    popupAddCard.querySelector('.popup__button ').textContent ='Сохранение...'
    addDataCard(handleCardAdd(evt).name, handleCardAdd(evt).src)
        .then((card) => {
        addCard(createCard(card, openPhoto, popupPhoto, true))
            popupAddCard.querySelector('.popup__button ').textContent ='Сохранить'
        closeModal(popupAddCard)
        }
    )
        .catch((err) => alert("Статус ошибки:" + err.status))
})

// функции добавления и изменения
function addCard(cardElement) {
    cardsContainer.prepend(cardElement);
}

function handleCardAdd(evt) {
    const cardName = evt.target.querySelector('.popup__input_type_card-name')
    const cardSrc = evt.target.querySelector('.popup__input_type_url')
    evt.preventDefault();
    return({name: cardName.value, src: cardSrc.value});
}

function handleProfileEdit(evt) {
    evt.preventDefault();
    popupProfile.querySelector('.popup__button ').textContent ='Сохранение...'
    editProfile(nameInput.value, jobInput.value)
        .then(() => {
        profileTitle.textContent = nameInput.value;
        profileDescription.textContent = jobInput.value;

        jobInput.textContent = jobInput.value;
        nameInput.textContent = nameInput.value;

        popupProfile.querySelector('.popup__button ').textContent ='Сохранить'
    })
        .catch((err) => alert("Статус ошибки:" + err.status))
}

function openChangeProfileModal(profileEl) {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openModal(profileEl)
    clearValidation(profileEl, popupSelectors)
}

function openAddCardModal(addCardEl) {
    addCardEl.querySelector('form').reset();
    openModal(addCardEl)
}

function openPhoto(photoEl, name, src) {
    const popupImage = photoEl.querySelector('img')
    photoEl.querySelector('.popup__caption').textContent = name;
    popupImage.src = src;
    popupImage.alt = name;

    openModal(photoEl)
}
// функции api

function setProfile (profileAvatar, profileTitle, profileDescription, profileInfo) {
    profileTitle.textContent = profileInfo.name;
    profileDescription.textContent = profileInfo.about;
    profileAvatar.style.backgroundImage = `url(${profileInfo.avatar})`;
}
function setCards(cards, id) {
    let isMyCard = false;
    cards.forEach((card) => {
      isMyCard = id === card.owner._id
        const dataCard = createCard(card, openPhoto, popupPhoto, isMyCard, id) ;
        cardsContainer.append(dataCard);
    });
}

function handleOpenAvatarPopup() {
    editAvatarPopup.querySelector('form').reset();
    openModal(editAvatarPopup);
}

editAvatarButton.addEventListener("click", () => {
    handleOpenAvatarPopup()
    clearValidation(editAvatarPopup, popupSelectors)
});

editAvatarPopup.querySelector('form').addEventListener('submit', function (evt){
    editAvatarPopup.querySelector('.popup__button ').textContent ='Сохранение...'
    editDataAvatar(evt.target[0].value)
        .then((res) => {
                profileAvatar.style.backgroundImage = `url(${res.avatar})`
                editAvatarPopup.querySelector('.popup__button ').textContent ='Сохранить'
                closeModal(editAvatarPopup)
            }
        )
        .catch((err) => alert("Статус ошибки:" + err.status))
})

//валидация
enableValidation(popupSelectors);



