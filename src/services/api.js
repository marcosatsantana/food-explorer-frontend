import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-explorer-backend-c2jn.onrender.com"
});