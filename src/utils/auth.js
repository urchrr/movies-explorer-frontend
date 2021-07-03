// const BASE_URL = "https://auth.nomoreparties.co";
import BASE_URL from './baseURL';
const handleOriginalResponse = (res) => {
  console.log(res, 'handle res');
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then(handleOriginalResponse)
    .then((data) => {
      console.log('base query data', data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    });
};

export const signup = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then(handleOriginalResponse)
    .then((data) => {
      console.log('base query data', data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    });
};

export const getAuthData = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(handleOriginalResponse);
  } else {
    return Promise.reject(`Error: Токен не получен`);
  }
};
