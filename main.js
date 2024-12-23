(()=>{"use strict";function e(e){return sendRequestApi("cards/likes/".concat(e),"PUT")}function t(e){return sendRequestApi("cards/likes/".concat(e),"DELETE")}var n,r=document.querySelector("#card-template").content;function o(n,o,u){var c=r.querySelector(".card").cloneNode(!0),i=c.querySelector(".card__like-button"),a=c.querySelector(".card__delete-button"),l=c.querySelector(".card__image"),s=c.querySelector(".like_counter");return c.querySelector(".card__title").textContent=n.name,c.querySelector(".card__image").src=n.link,c.querySelector(".card__image").alt=n.name,u===n.owner._id||(a.style.visibility="hidden"),s.textContent=n.likes.length,function(e,t){return e.likes.some((function(e){return e._id===t}))}(n,u)&&i.classList.add("card__like-button_is-active"),a.addEventListener("click",(function(e){return function(e,t){var n,r=e.target.closest(".card");(n=t,sendRequestApi("cards/".concat(n),"DELETE")).then((function(){return r.remove()})).catch((function(e){return alert("Статус ошибки:"+e)}))}(e,n._id)})),i.addEventListener("click",(function(r){return function(n,r,o,u){(n.target.classList.contains("card__like-button_is-active")?t:e)(r).then((function(e){o.classList.toggle("card__like-button_is-active"),u.textContent=e.likes.length})).catch((function(e){return console.error(e)}))}(r,n._id,i,s)})),l.addEventListener("click",(function(){return o(n)})),c}function u(e){e?(e.classList.add("popup_is-opened"),n=function(e){return function(t){"Escape"===t.key&&c(e)}}(e),document.addEventListener("keydown",n)):console.error('Popup "'.concat(e,'" не найден.'))}function c(e){e?(e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)):console.error('Popup с селектором "'.concat(e,'" не найден.'))}function i(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r.classList.remove(n.errorClass),r.textContent="",t.classList.remove(n.inputError)}function a(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButton),t.disabled=!1):(t.classList.add(n.inactiveButton),t.disabled=!0)}function l(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButton);n.forEach((function(n){return i(e,n,t)})),a(n,r,t)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d=document.querySelectorAll(".popup"),p=document.querySelector(".popup_type_new-card"),f=document.querySelector(".popup_type_edit"),_=document.querySelector(".popup_type_image"),m=_.querySelector(".popup__image"),y=_.querySelector(".popup__caption"),v=document.querySelector(".profile__add-button"),S=document.querySelector(".profile__edit-button"),q=document.querySelector(".popup__input_type_url"),b=document.querySelector(".popup__input_type_card-name"),g=document.querySelector(".places__list"),h=document.querySelector(".popup__input_type_name"),E=document.querySelector(".popup__input_type_description"),L=document.querySelector(".profile__title"),k=document.querySelector(".profile__description"),C=document.querySelector(".profile__image"),A=document.querySelector(".profile__image__edit-button"),x=document.querySelector(".popup_type_avatar-edit"),w=null;Promise.all([sendRequestApi("users/me"),sendRequestApi("cards")]).then((function(e){var t,n,r,u=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,c,i=[],a=!0,l=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=u.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=u[0],i=u[1];!function(e,t,n,r){t.textContent=r.name,n.textContent=r.about,e.style.backgroundImage="url(".concat(r.avatar,")")}(C,L,k,c),w=c._id,t=w,i.forEach((function(e){var n=o(e,T,t);g.append(n)}))})).catch((function(e){alert("Статус ошибки:"+e.status)}));var R={formSelector:".popup__form",inputSelector:".popup__input",submitButton:".popup__button",inactiveButton:"popup__button-disabled",inputError:"popup__input_type-error",errorClass:"popup__error-text"};function T(e){m.src=e.link,m.alt=e.name,y.textContent=e.name,u(_)}A.addEventListener("click",(function(){x.querySelector("form").reset(),u(x),l(x,R)})),v.addEventListener("click",(function(){var e;(e=p).querySelector("form").reset(),u(e),l(p,R)})),S.addEventListener("click",(function(){var e;e=f,h.value=L.textContent,E.value=k.textContent,u(e),l(e,R)})),d.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return c(e)})),e.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&c(e)})),e.classList.add("popup_is-animated")})),x.querySelector("form").addEventListener("submit",(function(e){var t;e.preventDefault(),e.submitter.textContent="Сохранение...",(t=e.target[0].value,sendRequestApi("users/me/avatar","PATCH",{avatar:t})).then((function(e){C.style.backgroundImage="url(".concat(e.avatar,")"),c(x)})).catch((function(e){return alert("Статус ошибки:"+e.status)})).finally((function(){return e.submitter.textContent="Сохранить"}))})),p.querySelector("form").addEventListener("submit",(function(e){var t,n;e.preventDefault(),e.submitter.textContent="Сохранение...",(t=b.value,n=q.value,sendRequestApi("cards","POST",{name:t,link:n})).then((function(e){var t;t=o(e,T,w),g.prepend(t),c(p)})).catch((function(e){return alert("Статус ошибки:"+e.status)})).finally((function(){return e.submitter.textContent="Создать"}))})),f.querySelector("form").addEventListener("submit",(function(e){var t,n;e.preventDefault(),e.submitter.textContent="Сохранение...",(t=h.value,n=E.value,sendRequestApi("users/me","PATCH",{name:t,about:n})).then((function(e){L.textContent=e.name,k.textContent=e.about,c(f)})).catch((function(e){return alert("Статус ошибки:"+e.status)})).finally((function(){return e.submitter.textContent="Сохранить"}))})),function(e){document.querySelectorAll(e.formSelector).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButton);n.forEach((function(o){o.addEventListener("input",(function(u){!function(e,t,n,r){e.validity.valid?i(t,e,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));o.classList.add(r.errorClass),o.textContent=n,t.classList.add(r.inputError)}(t,e,r.target.value.length<3?e.validationMessage:e.dataset.errorMessage,n)}(o,e,t,u),a(n,r,t)}))}))}(t,e)}))}(R)})();