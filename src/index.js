import './pages/index.css';
import {createCard} from "./scripts/cards";
import { openModal, closeModal} from "./scripts/modal";
// Поиск попапов
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupProfile = document.querySelector('.popup_type_edit');
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

const cardsContainer = document.querySelector(".places__list");
const nameInput =  document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

const shmyakLook = new URL("https://sun9-51.userapi.com/impg/haxjW5n4gNhRTJoapYfikaW1_0O8K8JMymJ2jg/a7ud6i_1nlU.jpg?size=1280x720&quality=95&sign=86f49bff0632d96a7110d198cd590b84&type=album", import.meta.url);
const shmyakLay = new URL("https://sun9-51.userapi.com/impg/rxSY5cf5_8SLEQ7jd7fWDwHGK9_1ERyZ-KRrUg/e856HzFf0oc.jpg?size=1280x720&quality=95&sign=65b81c74b619ddbf1d65960be27108fe&type=album", import.meta.url);
const shmyakHints = new URL("https://sun9-1.userapi.com/impg/GFq3Hsjt9FxNTyrYtywMtGKlu_ySxlsO6XAHUQ/2nUZ3lXBKiA.jpg?size=1280x720&quality=95&sign=704c87ddc320aca36c72f1c3f26d5fbd&type=album", import.meta.url)
const shmyakSniffs = new URL("https://sun9-62.userapi.com/impg/f_-mFqCIcoCW1OdSW3ujOIuG6qCn2Y_4CSuoQA/ZQ8RCNOM_yc.jpg?size=1280x720&quality=95&sign=f8f8b76f0da0b3f09d3f857b5832bedd&type=album", import.meta.url);
const shmyakHappy = new URL("https://sun9-13.userapi.com/impg/FDKoyFvrtYEWHvOChGHCoFGyO_5xy3rF3tdsFg/x70DSRAHq9U.jpg?size=1280x720&quality=95&sign=604af6e4a608cf50b56fcf1fa49c2e25&type=album", import.meta.url);
const shmyakNotHappy = new URL("https://sun9-56.userapi.com/impg/d-mW3d6L00q5E2dKJWf_o5BCo0dPQ8gNCsNcQA/rYaKD4NEibA.jpg?size=607x1080&quality=95&sign=84c1e418b89eac925551053001567d50&type=album", import.meta.url);

const initialCards = [
    { name: "Шмяк негодует", link: shmyakNotHappy,},
    { name: "Шмяк торчит", link: shmyakHappy, },
    { name: "Шмяк нюхает", link: shmyakSniffs, },
    { name: "Шмяк намекает", link: shmyakHints, },
    { name: "Шмяк глядит", link: shmyakLook, },
    { name: "Шмяк лежит", link: shmyakLay, },
];

initialCards.forEach((element) => {
    addCard(createCard(element.name, element.link, openPhoto, popupPhoto));
})

addButtonCard.addEventListener('click',() => openAddCardModal(popupAddCard))

editButtonProfile.addEventListener('click', () => openChangeProfileModal(popupProfile))

closeButtonInNewCard.addEventListener('click', () => closeModal(popupAddCard))
closeButtonProfile.addEventListener('click', () => closeModal(popupProfile))

imagePopupCloseButton.addEventListener('click', () => closeModal(popupPhoto))

popupProfile.querySelector('form').addEventListener('submit',function (evt)  {
    handleProfileEdit(evt)
    closeModal(popupProfile)
})

popupAddCard.querySelector('form').addEventListener('submit', function (evt){
    addCard(createCard(handleCardAdd(evt).name, handleCardAdd(evt).src, openPhoto, popupPhoto))
    closeModal(popupAddCard)
})

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
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    jobInput.textContent = jobInput.value;
    nameInput.textContent = nameInput.value;
}

function openChangeProfileModal(profileEl) {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openModal(profileEl)
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
