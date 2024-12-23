// const BASE_URL = "https://mesto.nomoreparties.co/v1/wff-cohort-28"
// const token = "0c437466-6d88-4853-b6df-3060be036c4e"
//
// export function handleResponse(res) {
//     if (res.ok) {
//         return res.json()
//     }
//     return Promise.reject(res)
// }
//
// function sendRequestApi(path, method = "GET", body = null) {
//     const params = {
//         method: method,
//         headers: {
//             authorization: token,
//             'Content-Type': 'application/json'
//         },
//     };
//     if (body) {
//         params.body = JSON.stringify(body)
//     }
//     return fetch(`${BASE_URL}/${path}`, params).then(handleResponse)
// }

export function getProfile() {
    return sendRequestApi("users/me")
}

export function getCards() {
    return sendRequestApi("cards")
}

export function editProfile(name, about) {
    return sendRequestApi("users/me", "PATCH", {name: name, about: about})
}

export function addDataCard(name,link) {
    return sendRequestApi("cards", "POST", {name: name, link: link})
}

export function removeDataCard (id) {
    return sendRequestApi(`cards/${id}`, "DELETE")
}

export function addDataLike(id) {
    return sendRequestApi(`cards/likes/${id}`, "PUT")
}

export function removeDataLike(id) {
    return sendRequestApi(`cards/likes/${id}`, "DELETE")
}

export function editDataAvatar(avatar) {
    return sendRequestApi('users/me/avatar', "PATCH", {avatar: avatar})
}
