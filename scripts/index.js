// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


const cardTemplate = document.querySelector('#card-template').content;

const cardsContainer = document.querySelector('.places__list');

function createCard(name, link, removeCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', removeCard);
  return cardElement;
}

function removeCard(evt) {  
  const card = evt.target.closest('.card');
  card.remove();
}

for (const element of initialCards) {
    const card = createCard(element.name, element.link, removeCard);
    cardsContainer.append(card);
  }