
const nameInput =  document.querySelector('.popup__input_type_card-name')
const jobInput = document.querySelector('.popup__input_type_description')

export function openModal(popupSelector, src, alt) {
    const popup = document.querySelector(popupSelector);
    if (popup) {
        if (popup.classList.contains('popup_type_image')) {
            let popupImage = popup.querySelector('.popup__image')
            
            popupImage.src = src;
            popupImage.alt = alt;
        }

        popup.classList.add('popup_is-opened');
        setTimeout( () => { popup.classList.add('popup_is-animated')}, 0) ;

        const onEscKeyPress = (event) => {
            if (event.key === 'Escape') {
                closeModal(popupSelector);
                document.removeEventListener('keydown', onEscKeyPress);
            }
        };

        document.addEventListener('keydown', onEscKeyPress);
    } else {
        console.error(`Popup с селектором "${popupSelector}" не найден.`);
    }
}

export function closeModal(popupSelector) {
    const popup = document.querySelector(popupSelector);
    if (popup) {
        popup.classList.remove('popup_is-opened');
        popup.classList.add('popup_is-animated')

    } else {
        console.error(`Popup с селектором "${popupSelector}" не найден.`);
    }
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup_is-opened')) {
        closeModal('.popup_is-opened');
    }
})

export function handleProfileEdit(evt) {
    evt.preventDefault();

    const jobInputValue = document.querySelector('.popup__input_type_description').value;
    const nameInputValue = document.querySelector('.popup__input_type_name').value;

    const profileTitle = document.querySelector('.profile__title')
    const profileDescription = document.querySelector('.profile__description')

    profileTitle.textContent = nameInputValue;
    profileDescription.textContent = jobInputValue;

    jobInput.textContent = jobInputValue;
    nameInput.textContent = nameInputValue;

}

export function handleCardAdd(evt) {
    evt.preventDefault();

    const cardNameValue = document.querySelector('.popup__input_type_card-name').value;
    const cardSrcValue = document.querySelector('.popup__input_type_url').value;

    return({name: cardNameValue, src: cardSrcValue});
}




