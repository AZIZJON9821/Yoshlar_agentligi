import axios from "axios";
export const baseURL = "https://api.it-mahalla.uz";

export const customAxios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

