import { shortFilmLength } from "./constants";
export const shortFilmCheck = (length) => {
  return length <= shortFilmLength;
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function chkLS(key) {
  return !!localStorage.getItem(key);
}

export function getLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function searchF(array, string) {
  console.log("s f", array, string);
  if (string !== "") {
    return array.filter((val) => {
      console.log(val, string);
      return val.nameRU.toLowerCase().includes(string.toLowerCase());
    });
  } else return [];
}
