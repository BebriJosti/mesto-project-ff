let handlerEscKeyPress
function onEscKeyPress  (popup) {
    return function (evt) {
        if (evt.key === 'Escape') {
            closeModal(popup);
        }
    };
}

export function openModal(popup) {
    if (popup) {
        popup.classList.add('popup_is-opened');

        handlerEscKeyPress = onEscKeyPress(popup);

        document.addEventListener('keydown', handlerEscKeyPress);

    } else {
        console.error(`Popup "${popup}" не найден.`);
    }
}

export function closeModal(popup) {
    if (popup) {
        popup.classList.remove('popup_is-opened')
        document.removeEventListener('keydown', handlerEscKeyPress)
    } else {
        console.error(`Popup с селектором "${popup}" не найден.`)
    }
}
