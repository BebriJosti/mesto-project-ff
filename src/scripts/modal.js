const nameInput =  document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

export function openModal(popup) {
    if (popup) {
        handleOutsideClick(popup)
        handleEscKeyPress(popup)
        popup.classList.add('popup_is-opened');
        popup.classList.add('popup_is-animated');

    } else {
        console.error(`Popup "${popup}" не найден.`);
    }
}

export function closeModal(popup) {
    if (popup) {
        popup.classList.add('popup_is-animated');
        popup.classList.remove('popup_is-opened');
        popup.classList.remove('popup__image');

        setTimeout(() => popup.classList.remove('popup_is-animated'), 500)
        if (popup.querySelector('form')) popup.querySelector('form').reset();
    } else {
        console.error(`Popup с селектором "${popup}" не найден.`);
    }
}

function handleOutsideClick(popup) {
    const outsideClickHandler = (event) => {
        if (event.target === popup) {
            closeModal(popup);
        }
    };

    document.addEventListener('click', outsideClickHandler);

    return () => {
        document.removeEventListener('click', outsideClickHandler);
    };
}


function handleEscKeyPress(popup) {
    const escKeyPressHandler = (event) => {
        if (event.key === 'Escape') {
            closeModal(popup);
        }
    };

    document.addEventListener('keydown', escKeyPressHandler);

    return () => {
        document.removeEventListener('keydown', escKeyPressHandler);
    };
}

export function handleProfileEdit(evt) {
    evt.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    jobInput.textContent = jobInput.value;
    nameInput.textContent = nameInput.value;
//закрытие модалки в индекс 51 чтобы обойтись без лишнего прокидывания и нагрузки памяти
}

export function openChangeProfileModal(profileEl) {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openModal(profileEl)
}

export function openAddCardModal(addCardEl) {
    openModal(addCardEl)
}

export function openPhoto(photoEl, name, src) {
    const popupImage = photoEl.querySelector('img')
    photoEl.classList.add('popup__image')
    photoEl.querySelector('.popup__caption').textContent = name;
    popupImage.src = src;
    popupImage.alt = name;

    openModal(photoEl)
}