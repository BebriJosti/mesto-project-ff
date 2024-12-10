const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add('popup__error-text');
    errorElement.textContent = errorMessage;
    inputElement.classList.add('popup__input_type-error');

};

const hideInputError = (formElement, inputElement) => {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove('popup__error-text');
    errorElement.textContent = ''
    inputElement.classList.remove('popup__input_type-error')
};

const checkInputValidity = (inputElement,formElement, popupSelector) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, popupSelector);
    } else {
        hideInputError(formElement, inputElement, popupSelector);
    }
};

const setEventListeners = (formElement, popupSelectors ) => {
    const inputList = Array.from(formElement.querySelectorAll(popupSelectors.inputSelector));
    const buttonElement = document.querySelector(popupSelectors.submitButton)
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(inputElement, formElement, popupSelectors);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

export function enableValidation(popupSelectors) {
    const formList = document.querySelectorAll(popupSelectors.formSelector)
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        })
        setEventListeners(formElement, popupSelectors)
    })}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
         return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement){
    console.log(hasInvalidInput(inputList))
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button-disabled')
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('popup__button-disabled')
        buttonElement.disabled = false;
        console.log(buttonElement)
    }
}

export function clearValidation (formElement, popupSelectors) {
    const inputElementList = Array.from(formElement.querySelectorAll(popupSelectors.inputSelector));
    const buttonElement = formElement.querySelector(popupSelectors.submitButton)

    inputElementList.forEach(inputElement => hideInputError(formElement, inputElement))

    toggleButtonState(inputElementList, buttonElement)
}