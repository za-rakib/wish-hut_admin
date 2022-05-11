const axios = require("axios");

const BASE_URL = "https://wish-hut-api.herokuapp.com/api";

const tokenId = JSON.parse(localStorage.getItem("persist:root"))?.user;

const TOKEN = tokenId && JSON.parse(tokenId).currentUser?.accessToken;
//console.log("TOKEN", TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
