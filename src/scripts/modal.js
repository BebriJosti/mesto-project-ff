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

        setTimeout(() => popup.classList.remove('popup_is-animated'), 500)
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

