const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://192.168.1.157:3050/api"
    : "https://movie-explorer.urchrr.ru/api";

export default BASE_URL;
