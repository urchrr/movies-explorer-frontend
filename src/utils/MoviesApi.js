import BASE_URL from './beatFilmsUrl';

const handleOriginalResponse = (res) => {
  console.log(res, 'handle res');
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export function getFilms() {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(handleOriginalResponse);
}