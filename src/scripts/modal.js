let handlerEscKeyPress
function onEscKeyPress  (popup) {
    return function (event) {
        if (event.key === 'Escape') {
            closeModal(popup);
        }
    };
}

let handlerOutsideClick
function outsideKeyPress  (popup) {
    return function (event) {
        if (event.target === popup) {
            closeModal(popup);
         }
    };
}

export function openModal(popup) {
    if (popup) {
        popup.classList.add('popup_is-opened');

        handlerEscKeyPress = onEscKeyPress(popup);
        document.addEventListener('keydown', handlerEscKeyPress);

        handlerOutsideClick = outsideKeyPress(popup);
        popup.addEventListener('click', handlerOutsideClick);
    } else {
        console.error(`Popup "${popup}" не найден.`);
    }
}

export function closeModal(popup) {
    if (popup) {
        popup.classList.add('popup_is-animated')
        popup.classList.remove('popup_is-opened')

        document.removeEventListener('keydown', handlerEscKeyPress)
        document.removeEventListener('click', handlerOutsideClick)

    } else {
        console.error(`Popup с селектором "${popup}" не найден.`)
    }
}
