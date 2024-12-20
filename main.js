(()=>{"use strict";function e(e){return e.ok?e.json():Promise.reject(e)}function t(t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",headers:{authorization:"0c437466-6d88-4853-b6df-3060be036c4e","Content-Type":"application/json"}};return n&&(r.body=JSON.stringify(n)),fetch("".concat("https://mesto.nomoreparties.co/v1/wff-cohort-28","/").concat(t),r).then(e)}function n(e){return t("cards/likes/".concat(e),"PUT")}function r(e){return t("cards/likes/".concat(e),"DELETE")}var o,u,c=document.querySelector("#card-template").content;function i(e,o,u,i,a){var l=c.querySelector(".card").cloneNode(!0),p=l.querySelector(".card__like-button"),s=l.querySelector(".card__delete-button"),d=l.querySelector(".card__image"),_=l.querySelector(".like_counter");return l.querySelector(".card__title").textContent=e.name,l.querySelector(".card__image").src=e.link,l.querySelector(".card__image").alt=e.name,i||(s.style.visibility="hidden"),_.textContent=e.likes.length,function(e,t){return e.likes.some((function(e){return e._id===t}))}(e,a)&&p.classList.add("card__like-button_is-active"),s.addEventListener("click",(function(n){return function(e,n){var r,o=e.target.closest(".card");(r=n,t("cards/".concat(r),"DELETE")).then((function(){return o.remove()})).catch((function(e){return alert("Статус ошибки:"+e)}))}(n,e._id)})),p.addEventListener("click",(function(t){return function(e,t,o,u){(e.target.classList.contains("card__like-button_is-active")?r:n)(t).then((function(e){o.classList.toggle("card__like-button_is-active"),u.textContent=e.likes.length})).catch((function(e){return console.error(e)}))}(t,e._id,p,_)})),d.addEventListener("click",(function(){return o(u,e.name,e.link)})),l}function a(e){return function(t){"Escape"===t.key&&p(e)}}function l(e){e?(a(e),e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),o=a(e),document.addEventListener("keydown",o),u=function(e){return function(t){t.target===e&&p(e)}}(e),document.addEventListener("click",u)):console.error('Popup "'.concat(e,'" не найден.'))}function p(e){e?(e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o),document.removeEventListener("click",u),setTimeout((function(){return e.classList.remove("popup_is-animated")}),500)):console.error('Popup с селектором "'.concat(e,'" не найден.'))}var s=function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));n.classList.remove("popup__error-text"),n.textContent="",t.classList.remove("popup__input_type-error")};function d(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove("popup__button-disabled"),t.disabled=!1):(t.classList.add("popup__button-disabled"),t.disabled=!0)}function _(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButton);n.forEach((function(t){return s(e,t)})),d(n,r)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var y=document.querySelector(".popup_type_new-card"),m=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_image"),S=document.querySelector(".profile__add-button"),q=document.querySelector(".profile__edit-button"),b=document.querySelector(".popup_type_new-card").querySelector(".popup__close"),h=document.querySelector(".popup_type_edit").querySelector(".popup__close"),g=document.querySelector(".popup_type_image").querySelector(".popup__close"),L=document.querySelector(".popup_type_avatar-edit").querySelector(".popup__close"),E=document.querySelector(".places__list"),k=document.querySelector(".popup__input_type_name"),C=document.querySelector(".popup__input_type_description"),x=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),T=document.querySelector(".profile__image"),w=document.querySelector(".profile__image__edit-button"),P=document.querySelector(".popup_type_avatar-edit"),j=null;Promise.all([t("users/me"),t("cards")]).then((function(e){var t,n,r,o,u=(o=2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,c,i=[],a=!0,l=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=u.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return i}}(r,o)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=u[0],a=u[1];!function(e,t,n,r){t.textContent=r.name,n.textContent=r.about,e.style.backgroundImage="url(".concat(r.avatar,")")}(T,x,A,c),j=c._id,t=j,n=!1,a.forEach((function(e){n=t===e.owner._id;var r=i(e,O,v,n,t);E.append(r)}))})).catch((function(e){alert("Статус ошибки:"+e.status)}));var D={formSelector:".popup__form",inputSelector:".popup__input",submitButton:".popup__button",inactiveButton:"popup__button-disabled",inputError:"popup__input_type-error"};function I(e){var t=e.target.querySelector(".popup__input_type_card-name"),n=e.target.querySelector(".popup__input_type_url");return e.preventDefault(),{name:t.value,src:n.value}}function O(e,t,n){var r=e.querySelector("img");e.querySelector(".popup__caption").textContent=t,r.src=n,r.alt=t,l(e)}S.addEventListener("click",(function(){var e;(e=y).querySelector("form").reset(),l(e),_(y,D)})),q.addEventListener("click",(function(){var e;e=m,k.value=x.textContent,C.value=A.textContent,l(e),_(e,D)})),b.addEventListener("click",(function(){return p(y)})),h.addEventListener("click",(function(){return p(m)})),g.addEventListener("click",(function(){return p(v)})),L.addEventListener("click",(function(){return p(P)})),m.querySelector("form").addEventListener("submit",(function(e){!function(e){var n,r;e.preventDefault(),m.querySelector(".popup__button ").textContent="Сохранение...",(n=k.value,r=C.value,t("users/me","PATCH",{name:n,about:r})).then((function(){x.textContent=k.value,A.textContent=C.value,C.textContent=C.value,k.textContent=k.value,m.querySelector(".popup__button ").textContent="Сохранить"})).catch((function(e){return alert("Статус ошибки:"+e.status)}))}(e),p(m)})),y.querySelector("form").addEventListener("submit",(function(e){var n,r;y.querySelector(".popup__button ").textContent="Сохранение...",(n=I(e).name,r=I(e).src,t("cards","POST",{name:n,link:r})).then((function(e){var t;t=i(e,O,v,!0),E.prepend(t),y.querySelector(".popup__button ").textContent="Сохранить",p(y)})).catch((function(e){return alert("Статус ошибки:"+e.status)}))})),w.addEventListener("click",(function(){P.querySelector("form").reset(),l(P),_(P,D)})),P.querySelector("form").addEventListener("submit",(function(e){var n;P.querySelector(".popup__button ").textContent="Сохранение...",(n=e.target[0].value,t("users/me/avatar","PATCH",{avatar:n})).then((function(e){T.style.backgroundImage="url(".concat(e.avatar,")"),P.querySelector(".popup__button ").textContent="Сохранить",p(P)})).catch((function(e){return alert("Статус ошибки:"+e.status)}))})),function(e){document.querySelectorAll(e.formSelector).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButton);n.forEach((function(t){t.addEventListener("input",(function(o){!function(e,t,n,r){e.validity.valid?s(t,e):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r.classList.add("popup__error-text"),r.textContent=n,t.classList.add("popup__input_type-error")}(t,e,r.target.value.length<3?e.validationMessage:e.dataset.errorMessage)}(t,e,0,o),d(n,r)}))}))}(t,e)}))}(D)})();