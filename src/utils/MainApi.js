import BASE_URL from "./baseURL";

const token = localStorage.getItem("token");
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const handleOriginalResponse = (res) => {
  console.log(res, "handle res");
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export function setUserInfo({ name, email }) {
  return fetch(BASE_URL + "/users/me", {
    method: "PATCH",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({
      name,
      email,
    }),
  }).then(handleOriginalResponse);
}

export function saveFilm(data) {
  return fetch(BASE_URL + "/movies", {
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify(data),
  }).then(handleOriginalResponse);
}

export function getFilms() {
  return fetch(BASE_URL + "/movies", {
    method: "GET",
    credentials: "include",
    headers: headers,
  }).then(handleOriginalResponse);
}
export function unsaveFilm(id) {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: headers,
  }).then(handleOriginalResponse);
}
