import './pages/index.css';
import {createCard, handleCardLike} from "./scripts/cards";
import {openModal, closeModal, handleProfileEdit, handleCardAdd} from "./scripts/modal";

const cardFormElement = document.querySelector('[name = "new-place"]')
const profileFormElement = document.querySelector('[name = "edit-profile"]')
const addButtonCard = document.querySelector(".profile__add-button")
const closeButtonInNewCard = document.querySelector(".popup_type_new-card")
    .querySelector(".popup__close")
const addButtonProfile = document.querySelector(".profile__edit-button")
const closeButtonProfile = document.querySelector(".popup_type_edit")
    .querySelector(".popup__close")
const imagePopupCloseButton = document.querySelector(".popup_type_image")
    .querySelector(".popup__close")

addButtonCard.addEventListener('click',() => openModal('.popup_type_new-card'))
closeButtonInNewCard.addEventListener('click', () => closeModal('.popup_type_new-card'))

addButtonProfile.addEventListener('click', () => openModal(".popup_type_edit"))
closeButtonProfile.addEventListener('click', () => closeModal(".popup_type_edit"))

imagePopupCloseButton.addEventListener('click', () => closeModal(".popup_type_image"))

profileFormElement.addEventListener('submit',function (evt)  {
    handleProfileEdit(evt)
    closeModal(".popup_type_edit")
})

cardFormElement.addEventListener('submit', function (evt){
    createCard(handleCardAdd(evt).name, handleCardAdd(evt).src)
    closeModal(".popup_type_new-card")
    cardFormElement.reset();
})

