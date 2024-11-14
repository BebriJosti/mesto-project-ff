import './pages/index.css';
import {createCard, handleCardAdd} from "./scripts/cards";
import {openModal, closeModal, handleProfileEdit} from "./scripts/modal";

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

const shmyakLook = new URL("https://sun9-51.userapi.com/impg/haxjW5n4gNhRTJoapYfikaW1_0O8K8JMymJ2jg/a7ud6i_1nlU.jpg?size=1280x720&quality=95&sign=86f49bff0632d96a7110d198cd590b84&type=album", import.meta.url);
const shmyakLay = new URL("https://sun9-51.userapi.com/impg/rxSY5cf5_8SLEQ7jd7fWDwHGK9_1ERyZ-KRrUg/e856HzFf0oc.jpg?size=1280x720&quality=95&sign=65b81c74b619ddbf1d65960be27108fe&type=album", import.meta.url);
const shmyakHints = new URL("https://sun9-1.userapi.com/impg/GFq3Hsjt9FxNTyrYtywMtGKlu_ySxlsO6XAHUQ/2nUZ3lXBKiA.jpg?size=1280x720&quality=95&sign=704c87ddc320aca36c72f1c3f26d5fbd&type=album", import.meta.url)
const shmyakSniffs = new URL("https://sun9-62.userapi.com/impg/f_-mFqCIcoCW1OdSW3ujOIuG6qCn2Y_4CSuoQA/ZQ8RCNOM_yc.jpg?size=1280x720&quality=95&sign=f8f8b76f0da0b3f09d3f857b5832bedd&type=album", import.meta.url);
const shmyakHappy = new URL("https://sun9-13.userapi.com/impg/FDKoyFvrtYEWHvOChGHCoFGyO_5xy3rF3tdsFg/x70DSRAHq9U.jpg?size=1280x720&quality=95&sign=604af6e4a608cf50b56fcf1fa49c2e25&type=album", import.meta.url);
const shmyakNotHappy = new URL("https://sun9-56.userapi.com/impg/d-mW3d6L00q5E2dKJWf_o5BCo0dPQ8gNCsNcQA/rYaKD4NEibA.jpg?size=607x1080&quality=95&sign=84c1e418b89eac925551053001567d50&type=album", import.meta.url);

const initialCards = [
    { name: "Шмяк лежит", link: shmyakLay, },
    { name: "Шмяк глядит", link: shmyakLook, },
    { name: "Шмяк намекает", link: shmyakHints, },
    { name: "Шмяк нюхает", link: shmyakSniffs, },
    { name: "Шмяк торчит",  link: shmyakHappy, },
    { name: "Шмяк негодует", link: shmyakNotHappy,},
];

initialCards.forEach((element) => {
    createCard(element.name, element.link);
})

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

