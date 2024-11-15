const nameInput =  document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')
let escKeyPressHandler

     function onEscKeyPress  (popupSelector) {
     return function (event) {
         if (event.key === 'Escape') {
             console.log('popa')
             closeModal(popupSelector);
         }
     };
 }

export function openModal(popupSelector, src, alt) {
    const popup = document.querySelector(popupSelector);
    if (popup) {
        if (popup.classList.contains('popup_type_image')) {
            const popupImage = popup.querySelector('.popup__image');
            popup.querySelector('.popup__caption').textContent = alt;
            popupImage.src = src;
            popupImage.alt = alt;
        }
        if (popup.querySelector('[name="edit-profile"]')) {
            nameInput.value = profileTitle.textContent;
            jobInput.value = profileDescription.textContent;
        }

        popup.classList.add('popup_is-opened');
        popup.classList.add('popup_is-animated');

        escKeyPressHandler = onEscKeyPress(popupSelector);
        document.addEventListener('keydown', escKeyPressHandler);
    } else {
        console.error(`Popup с селектором "${popupSelector}" не найден.`);
    }
}

export function closeModal(popupSelector) {
    const popup = document.querySelector(popupSelector);
    if (popup) {

        document.removeEventListener('keydown', escKeyPressHandler);
        popup.classList.remove('popup_is-opened');
        popup.classList.add('popup_is-animated');

        if (popup.querySelector('form')) popup.querySelector('form').reset();
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

    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    jobInput.textContent = jobInput.value;
    nameInput.textContent = nameInput.value;
}

