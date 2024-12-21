function showInputError (formElement, inputElement, errorMessage, popupSelectors)  {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(popupSelectors.errorClass);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(popupSelectors.inputError);

}

function hideInputError (formElement, inputElement, popupSelectors)  {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(popupSelectors.errorClass);
    errorElement.textContent = ''
    inputElement.classList.remove(popupSelectors.inputError)
}

function checkInputValidity (inputElement,formElement, popupSelector, evt)  {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, evt.target.value.length < 3
            ? inputElement.validationMessage
            : inputElement.dataset.errorMessage, popupSelector);
    } else {
        hideInputError(formElement, inputElement, popupSelector);
    }
}

function setEventListeners (formElement, popupSelectors )  {
    const inputList = Array.from(formElement.querySelectorAll(popupSelectors.inputSelector));
    const buttonElement = formElement.querySelector(popupSelectors.submitButton)
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input',  (evt) => {
            checkInputValidity(inputElement, formElement, popupSelectors, evt);
            toggleButtonState(inputList, buttonElement, popupSelectors);
        });
    });
}

export function enableValidation(popupSelectors) {
    const formList = document.querySelectorAll(popupSelectors.formSelector)
    formList.forEach((formElement) => {
        setEventListeners(formElement, popupSelectors)
    })}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
         return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement, popupSelectors){
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(popupSelectors.inactiveButton)
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(popupSelectors.inactiveButton)
        buttonElement.disabled = false;
    }
}

export function clearValidation (formElement, popupSelectors) {
    const inputElementList = Array.from(formElement.querySelectorAll(popupSelectors.inputSelector));
    const buttonElement = formElement.querySelector(popupSelectors.submitButton)

    inputElementList.forEach(inputElement => hideInputError(formElement, inputElement, popupSelectors))

    toggleButtonState(inputElementList, buttonElement, popupSelectors)
}