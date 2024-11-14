import {openModal} from "./modal";

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

const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".places__list");


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

initialCards.forEach((element) => {
    createCard(element.name, element.link);
})



