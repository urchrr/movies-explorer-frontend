const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3050/api'
  : "https://api.urchrr-mesto.nomoredomains.icu";

export default BASE_URL;