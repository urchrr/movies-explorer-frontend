export const shortFilmCheck = (length) => {
  return length <= 40;
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function chkLS(key) {
  return localStorage.getItem(key);
}

export function getLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
