import './pages/index.css';
import {createCard} from "./scripts/cards";
import { openModal, closeModal} from "./scripts/modal";
import {enableValidation, clearValidation} from "./scripts/validation"
import {addDataCard, editDataAvatar, editProfile, getCards, getProfile} from "./scripts/api";

const popups = document.querySelectorAll('.popup')
const popupAddCard = document.querySelector('.popup_type_new-card')
const popupProfile = document.querySelector('.popup_type_edit')
const popupPhoto = document.querySelector(".popup_type_image")
const popupImage = popupPhoto.querySelector(".popup__image")
const popupCaption = popupPhoto.querySelector(".popup__caption")

const addButtonCard = document.querySelector(".profile__add-button")
const editButtonProfile = document.querySelector(".profile__edit-button")
const popupInputUrl = document.querySelector(".popup__input_type_url")
const popupImageName = document.querySelector(".popup__input_type_card-name")

const cardsContainer = document.querySelector(".places__list")
const nameInput =  document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')
const profileAvatar = document.querySelector('.profile__image')
const editAvatarButton = document.querySelector(".profile__image__edit-button")
const editAvatarPopup = document.querySelector(".popup_type_avatar-edit")

let userId = null

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
    errorClass : "popup__error-text"
};

editAvatarButton.addEventListener("click", () => {
    handleOpenAvatarPopup()
    clearValidation(editAvatarPopup, popupSelectors)
});

addButtonCard.addEventListener('click', () => {
    openAddCardModal(popupAddCard);
     clearValidation(popupAddCard, popupSelectors)
});

editButtonProfile.addEventListener('click', () => {
    openChangeProfileModal(popupProfile)
})
// закрытие модалки

popups.forEach((popup) => {
    const closeButton = popup.querySelector('.popup__close')
    closeButton.addEventListener('click', () => closeModal(popup))
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target === evt.currentTarget) {
            closeModal(popup);
        }
    })
    popup.classList.add('popup_is-animated');
});

function addCard(cardElement) {
    cardsContainer.prepend(cardElement);
}

function handleOpenAvatarPopup() {
    editAvatarPopup.querySelector('form').reset();
    openModal(editAvatarPopup);
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

export function openPhoto(card) {
    popupImage.src = card.link
    popupImage.alt = card.name
    popupCaption.textContent = card.name
    openModal(popupPhoto)
}

function setProfile (profileAvatar, profileTitle, profileDescription, profileInfo) {
    profileTitle.textContent = profileInfo.name;
    profileDescription.textContent = profileInfo.about;
    profileAvatar.style.backgroundImage = `url(${profileInfo.avatar})`;
}
function setCards(cards, id) {
    cards.forEach((card) => {
        const dataCard = createCard(card,openPhoto, id) ;
        cardsContainer.append(dataCard);
    });
}

editAvatarPopup.querySelector('form').addEventListener('submit', function (evt){
    evt.preventDefault()
    evt.submitter.textContent ='Сохранение...'
    editDataAvatar(evt.target[0].value)
        .then((res) => {
                profileAvatar.style.backgroundImage = `url(${res.avatar})`
                closeModal(editAvatarPopup)
            }
        )
        .catch((err) => alert("Статус ошибки:" + err.status))
        .finally(()=> evt.submitter.textContent ='Сохранить')
})

popupAddCard.querySelector('form').addEventListener('submit', function (evt){
    evt.preventDefault()
    evt.submitter.textContent ='Сохранение...'
    addDataCard(popupImageName.value, popupInputUrl.value)
        .then((card) => {
                addCard(createCard(card, openPhoto, userId))
                closeModal(popupAddCard)
            }
        )
        .catch((err) => alert("Статус ошибки:" + err.status))
        .finally(() => evt.submitter.textContent ='Создать')
})

popupProfile.querySelector('form').addEventListener('submit',function (evt)  {
    evt.preventDefault();
    evt.submitter.textContent ='Сохранение...'
    editProfile(nameInput.value, jobInput.value)
        .then((res) => {
            profileTitle.textContent = res.name;
            profileDescription.textContent = res.about;
            closeModal(popupProfile)
        })
        .catch((err) => alert("Статус ошибки:" + err.status))
        .finally(() => evt.submitter.textContent ='Сохранить')
})

//валидация
enableValidation(popupSelectors);



