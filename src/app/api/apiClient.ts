import axios from "axios";

const DOG_URL = "https://thedogapi.com";
const CAT_URL = "https://thecatapi.com";

export const rocketsApiClient = axios.create({
  baseURL: ROCKETS_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

